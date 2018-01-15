
const expect = require('chai').expect;
const sinon = require('sinon');
const clientModule = require('../../src/lib/wsClient.js');

describe('WsClient', function() {
  let client, component, ws, json_obj, json;

  beforeEach(function() {
    ws = { send: sinon.spy() };
    component = { 
      updateQuestion: sinon.spy(),
      updateScores: sinon.spy(),
      getName: sinon.stub().returns('name'),
      getScore: sinon.stub().returns('score'),
      getQuestion: sinon.stub().returns('question'),
      isFinished: sinon.stub().returns('true'),
    };
    json_obj = { stringify: sinon.stub().returns('json') };
    client = new clientModule.WsClient(component, ws, 5000);
  });

  describe('#configure', function() {
    beforeEach(function() {
      sinon.spy(client, 'startInterval');
      sinon.stub(client, 'getRoute').returns(0);
      client.configure();
    });

    it('sets onmessage to #route', function() {
      expect(ws.onmessage).to.equal(0);
    });

    it('starts interval', function() {
      sinon.assert.calledWith(client.startInterval, 5000);
    });
  });

  describe('#route', function() {
    let event, func, json_obj;

    beforeEach(function() {
      func = client.getRoute(client);
    });

    describe('when receiving question signal', function() {
      beforeEach(function() {
        event = { data: { type: 'question', question: 0 } };
        json_obj = { parse: sinon.stub().returns(event.data) };
        sinon.spy(client, 'updateQuestion');
        func(event, json_obj);
      });

      it('updates question', function() {
        sinon.assert.calledWith(client.updateQuestion, 0);
      });
    });

    describe('when receiving endQuiz signal', function() {
      beforeEach(function() {
        event = { data: { type: 'endQuiz' } };
        json_obj = { parse: sinon.stub().returns(event.data) };
        sinon.spy(client, 'sendScore');
        sinon.stub(client, 'getName').returns('name');
        sinon.stub(client, 'getScore').returns('score');
        func(event, json_obj);
      });

      it('updates question', function() {
        sinon.assert.calledWith(client.sendScore, 'name', 'score');
      });
    });
    
    describe('when receiving scores signal', function() {
      beforeEach(function() {
        event = { data: { type: 'scores', scores: 0 } };
        json_obj = { parse: sinon.stub().returns(event.data) };
        sinon.spy(client, 'updateScores');
        func(event, json_obj);
      });

      it('updates question', function() {
        sinon.assert.calledWith(client.updateScores, 0);
      });
    });
  });

  describe('#updateQuestion', function() {
    beforeEach(function() {
      client.updateQuestion(0);
    });

    it('updates component question', function() {
      sinon.assert.calledWith(component.updateQuestion, 0);
    });
  });

  describe('#updateScores', function() {
    beforeEach(function() {
      client.updateScores(0);
    });

    it('updates component scores', function() {
      sinon.assert.calledWith(component.updateScores, 0);
    });
  });

  describe('#getName', function() {
    it('returns component name', function() {
      expect(client.getName()).to.equal('name');
    });
  });

  describe('#getScore', function() {
    it('returns component name', function() {
      expect(client.getScore()).to.equal('score');
    });
  });

  describe('#getFinishedState', function() {
    it('returns component name', function() {
      expect(client.getFinishedState()).to.equal('true');
    });
  });

  describe('#getSendMessage', function() {
    var func;

    beforeEach(function() {
      func = client.getSendMessage(client);
    });

    describe('when finished', function() {
      beforeEach(function() {
        sinon.stub(client, 'getFinishedState').returns(true);
        sinon.spy(client, 'sendQuizEnd');
        func();
      });

      it('sends quiz end', function() {
        sinon.assert.called(client.sendQuizEnd);
      });
    });

    describe('when not finished', function() {
      beforeEach(function() {
        sinon.stub(client, 'getFinishedState').returns(false);
        sinon.spy(client, 'sendQuestionId');
        func();
      });

      it('sends question ID', function() {
        sinon.assert.called(client.sendQuestionId);
      });
    });
  });

  describe('#sendQuestionId', function() {
    beforeEach(function() {
      json = { type: "question", question: 5, time: 5000 };
      client.sendQuestionId(5, json_obj);
    });

    it('stringifies message', function() {
      sinon.assert.calledWith(json_obj.stringify, json);
    });

    it('sends stringified json', function() {
      sinon.assert.calledWith(ws.send, 'json');
    });
  });

  describe('#sendQuestionId', function() {
    beforeEach(function() {
      json = { type: "endQuiz" };
      client.sendQuizEnd(json_obj);
    });

    it('stringifies message', function() {
      sinon.assert.calledWith(json_obj.stringify, json);
    });

    it('sends stringified json', function() {
      sinon.assert.calledWith(ws.send, 'json');
    });
  });

  describe('#sendScore', function() {
    beforeEach(function() {
      json = { type: "score", teamName: "name", score: 10 };
      client.sendScore("name", 10, json_obj);
    });

    it('stringifies message', function() {
      sinon.assert.calledWith(json_obj.stringify, json);
    });

    it('sends stringified json', function() {
      sinon.assert.calledWith(ws.send, 'json');
    });
  });

  describe('#startInterval', function() {
    let manager;

    beforeEach(function() {
      sinon.stub(client, 'getSendMessage').returns(2);
      manager = sinon.stub().returns(0);
      client.startInterval(1, manager);
    });

    it('calls manager function', function() {
      sinon.assert.calledWith(manager, 2, 1);
    });

    it('sets intervalId', function() {
      expect(client._intervalId).to.equal(0);
    });
  });

  describe('#endInterval', function() {
    let manager;

    beforeEach(function() {
      client._intervalId = 0;
      manager = sinon.spy()
      client.endInterval(manager);
    });

    it('calls manager function', function() {
      sinon.assert.calledWith(manager, 0);
    });
  });
});

describe('buildWsClient', function() {
  let client, constructor, ws_constructor, output;

  beforeEach(function() {
    client = { configure: sinon.spy() };
    constructor = sinon.stub().returns(client);
    ws_constructor = sinon.stub().returns('ws');
    output = clientModule.buildWsClient(
      'component', 'url', constructor, ws_constructor
    );
  });

  it('creates client with web socket', function() {
    sinon.assert.calledWith(constructor, 'component', 'ws');
  });

  it('creates web socket with url', function() {
    sinon.assert.calledWith(ws_constructor, 'url');
  });

  it('configures client', function() {
    sinon.assert.called(client.configure);
  });

  it('returns client', function() {
    expect(output).to.equal(client);
  });
});
