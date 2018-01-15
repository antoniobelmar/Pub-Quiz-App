import Option from './Option';

function Question(option = new Option()) {
  this._placeholder = "Add your question";
  this._type = '';
  this._text =  '';
  this._options = [option];
  this._answer= [{text: ''}];
}

Question.prototype.addOption = function(option = new Option()) {
  this._options.push(option)
}

Question.prototype.removeOption = function(index) {
  this._options.splice(index, 1)
}

export default Question
