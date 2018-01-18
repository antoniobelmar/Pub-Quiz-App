'use strict';

const URL = 'ws://localhost:5000';

class WsClient {
  constructor(component, ws, wsId, timeout = 10000) {
    this._component = component;
    this._ws = ws;
    this._timeout = timeout;
    this._wsId = wsId
  };

  changeTimeout(time) {
    this._timeout = time;
    this.updateTimeout(time);
  };

  // incoming messages

  configure() {
    this._ws.onmessage = this.getRoute(this);
  };

  start() {
    this.sendQuizStart();
    this.startInterval(this._timeout);
  };

  sendLeader() {
    let self = this
    this._ws.onopen = function(){
      self._ws.send(JSON.stringify({ type: "here comes the leader"}));
    };
  };

  getRoute(self) {
    return function route(event, json_obj = JSON) {
      let data = json_obj.parse(event.data);
      console.log(event.data);
      switch(data.type) {
        case 'Leader':
          self.showLeaderMessage()
          self.updateDisable();
        break;
        case 'startQuiz':
          self.changeTimeout(parseInt(data.time));
          self.updateDisable();
          self.updateQuestionIdOnly(parseInt(data.question));
        break;
        case 'question':
          self.updateQuestion(parseInt(data.question), self._timeout);
        break;
        case 'endQuiz':
          self.sendScore(self.getName(), self.getScore());
        break;
        case 'scores':
          self.updateScores(data.scores);
          self.sendKill();
        break;
      };
    };
  };

  updateQuestionIdOnly(id) {
    this._component.updateQuestionIdOnly(id);
  };

  updateQuestion(questionId, time) {
    this._component.updateQuestion(questionId, time);
  };

  updateScores(scores) {
    this._component.updateScores(scores);
  };

  updateTimeout(time) {
    this._component.updateTimeout(time);
  };

  // outgoing messages

  getSendMessage(self) {
    return function sendMessage() {
      if (self.getFinishedState()) {
        self.endInterval();
        self.sendQuizEnd();
      } else {
        self.sendQuestionId(self.getQuestionId() + 1);
      };
    };
  };

  getName() {
    return this._component.getName();
  };

  showLeaderMessage() {
    return this._component.showLeaderMessage();
  }

  updateDisable() {
    return this._component.updateDisable();
  }

  getScore() {
    return this._component.getScore();
  };

  getFinishedState() {
    return this._component.isFinished();
  };

  getQuestionId() {
    return this._component.getQuestion();
  };

  sendQuestionId(id, json_obj = JSON) {
    this._ws.send(this._questionIdMessage(id, json_obj));
  };

  _questionIdMessage(id, json_obj) {
    return json_obj.stringify({
      type: "question",
      question: id
    });
  };

  sendQuizLeader(json_obj = JSON) {
    this._ws.send(this._quizLeaderMessage(json_obj))
  };

  _quizLeaderMessage(json_obj) {
    return json_obj.stringify({ type: "Here comes the leader"})
  }

  sendQuizStart(json_obj = JSON) {
    this._ws.send(this._quizStartMessage(json_obj))
  };

  _quizStartMessage(json_obj) {
    return json_obj.stringify({ 
      type: "startQuiz", 
      time: this._timeout,
      question: 0
    });
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

  sendKill(json_obj = JSON) {
    this._ws.send(this._killMessage(json_obj));
  };

  _killMessage(json_obj) {
    return json_obj.stringify({ type: "kill", wsId: this._wsId});
  };

  // intervals

  startInterval(timeout, func = setInterval) {
    let sendMessage = this.getSendMessage(this);
    this._intervalId = func(sendMessage, timeout);
  };

  endInterval(func = clearInterval) {
    func(this._intervalId);
  };
};

function newWs(url, constructor = WebSocket) {
  return new constructor(url);
};

function newWsClient(component, ws, id, constructor = WsClient) {
  return new constructor(component, ws, id);
};

function buildWsClient(component, url, id, constructor = newWsClient,
                       ws_constructor = newWs) {
  let ws = ws_constructor(url);
  let client = constructor(component, ws, id);
  client.configure();
  client.sendLeader();
  return client;
};

module.exports = { buildWsClient, WsClient };
