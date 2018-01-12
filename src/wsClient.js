class WsClient {
  constructor(component, ws) {
    this._component = component;
    this._ws = ws;
  };

  // incoming messages

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

  getName() {
    return this._component.getName();
  };

  getScore() {
    return this._component.getScore();
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
  
  startInterval(message, timeout, func = setInterval) {
    this._intervalId = func(message, timeout);
  };

  endInterval(func = clearInterval) {
    func(this._intervalId);
  };
};


function sendMessage() {
  var atEnd = self.state.number === self.state.questions.length;
  if (atEnd || !self.state.questionsRecieved) {
    sendQuizEnd();
    clearInterval(intervalId)
  } else {
    sendQuestionId();
  };
};

function buildWsClient(url, ws_constructor = WebSocket) {
  let ws = new ws_constructor(url);
  return new WsClient(ws);
};

const URL = 'ws://localhost:5000';

module.exports.buildWsClient = buildWsClient;
module.exports.WsClient = WsClient;
