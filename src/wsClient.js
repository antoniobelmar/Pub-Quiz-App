'use strict';

const URL = 'ws://localhost:5000';

class WsClient {
  constructor(component, ws) {
    this._component = component;
    this._ws = ws;
  };

  // incoming messages
  
  configure() {
    this._ws.onmessage = this.route;
  };
  
  route(data) {
    switch(data.type) {
      case 'question':
        this.updateQuestion(data.question);
        break;
      case 'endQuiz':
        this.sendScore(this.getName(), this.getScore());
        break;
      case 'scores':
        this.updateScores(data.scores);
        break;
    };
  };

  updateQuestion(questionId) {
    this._component.updateQuestion(questionId);
  };

  updateScores(scores) {
    this._component.updateScores(scores);
  };

  // outgoing messages

  sendMessage() {
    if (this.getFinishedState()) {
      this.endInterval();
      this.sendQuizEnd();
    } else {
      this.sendQuestionId();
    };
  };

  getName() {
    return this._component.getName();
  };

  getScore() {
    return this._component.getScore();
  };

  getFinishedState() {
    return this._component.isFinished();
  };

  sendQuestionId(id, json_obj = JSON) {
    this._ws.send(this._questionIdMessage(id, json_obj));
  };

  _questionIdMessage(id, json_obj) {
    return json_obj.stringify({ type: "question", question: id });
  };

  sendQuizEnd(json_obj = JSON) {
    this._ws.send(this._quizEndMessage(json_obj));
  };

  _quizEndMessage(json_obj) {
    return json_obj.stringify({ type: "endQuiz" });
  };

  sendScore(teamName, score, json_obj = JSON) {
    this._ws.send(this._scoreMessage(teamName, score, json_obj));
  }

  _scoreMessage(teamName, score, json_obj) {
    return json_obj.stringify(
      { type: "score", teamName: teamName, score: score }
    );
  };

  // intervals
  
  startInterval(timeout, func = setInterval) {
    this._intervalId = func(this.sendMessage, timeout);
  };

  endInterval(func = clearInterval) {
    func(this._intervalId);
  };
};

function newWs(constructor, url) {
  return new constructor(url);
};

function newWsClient(constructor, component, ws) {
  return new constructor(component, ws);
};

function buildWsClient(component, url, constructor = newWsClient, 
                       ws_constructor = newWs) {
  let ws = ws_constructor(url);
  let client = constructor(component, ws);
  client.configure();
  return client;
};


module.exports.buildWsClient = buildWsClient;
module.exports.WsClient = WsClient;
