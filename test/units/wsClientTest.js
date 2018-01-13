
const expect = require('chai').expect;
const sinon = require('sinon');
const clientModule = require('../../src/wsClient.js');

describe('WsClient', function() {
  let client, component, ws, json_obj, json;

  beforeEach(function() {
    ws = { send: sinon.spy() };
    component = { 
      updateQuestion: sinon.spy(),
      updateScores: sinon.spy(),
      getName: sinon.stub().returns('name'),
      getScore: sinon.stub().returns('score'),
      isFinished: sinon.stub().returns('true'),
    };
    json_obj = { stringify: sinon.stub().returns('json') };
    client = new clientModule.WsClient(component, ws);
  });

  describe('#configure', function() {
    beforeEach(function() {
      client.configure()
    });

    it('sets onmessage to #route', function() {
      expect(ws.onmessage).to.equal(client.route);
    });
  });

  describe('#route', function() {
    let data;

    describe('when receiving question signal', function() {
      beforeEach(function() {
        data = { type: 'question', question: 0 };
        sinon.spy(client, 'updateQuestion');
        client.route(data);
      });

      it('updates question', function() {
        sinon.assert.calledWith(client.updateQuestion, 0);
      });
    });

    describe('when receiving endQuiz signal', function() {
      beforeEach(function() {
        data = { type: 'endQuiz' };
        sinon.spy(client, 'sendScore');
        sinon.stub(client, 'getName').returns('name');
        sinon.stub(client, 'getScore').returns('score');
        client.route(data);
      });

      it('updates question', function() {
        sinon.assert.calledWith(client.sendScore, 'name', 'score');
      });
    });
    
    describe('when receiving scores signal', function() {
      beforeEach(function() {
        data = { type: 'scores', scores: 0 };
        sinon.spy(client, 'updateScores');
        client.route(data);
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

  describe('#sendMessage', function() {
    describe('when finished', function() {
      beforeEach(function() {
        sinon.stub(client, 'getFinishedState').returns(true);
        sinon.spy(client, 'sendQuizEnd');
        client.sendMessage();
      });

      it('sends quiz end', function() {
        sinon.assert.called(client.sendQuizEnd);
      });
    });

    describe('when not finished', function() {
      beforeEach(function() {
        sinon.stub(client, 'getFinishedState').returns(false);
        sinon.spy(client, 'sendQuestionId');
        client.sendMessage();
      });

      it('sends question ID', function() {
        sinon.assert.called(client.sendQuestionId);
      });
    });
  });

  describe('#sendQuestionId', function() {
    beforeEach(function() {
      json = { type: "question", question: 5 };
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
      sinon.spy(client, 'sendMessage');
      action = sinon.spy();
      manager = sinon.stub().returns(0);
      client.startInterval(1, manager);
    });

    it('calls manager function', function() {
      sinon.assert.calledWith(manager, client.sendMessage, 1);
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
