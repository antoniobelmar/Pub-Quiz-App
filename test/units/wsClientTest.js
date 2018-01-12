
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
      getScore: sinon.stub().returns('score')
    };
    json_obj = { stringify: sinon.stub().returns('json') };
    client = new clientModule.WsClient(component, ws);
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
    let action, manager;

    beforeEach(function() {
      action = sinon.spy();
      manager = sinon.stub().returns(0);
      client.startInterval(1, 2, manager);
    });

    it('calls manager function', function() {
      sinon.assert.calledWith(manager, 1, 2);
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
});
