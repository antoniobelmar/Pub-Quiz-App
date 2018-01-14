import Option from './Option';

function Question(option = new Option()) {
  this.placeholder = "Add your question";
  this.type = '';
  this.text =  '';
  this.options = [option];
  this.answer= [{text: ''}];
}

Question.prototype.addOption = function(option = new Option()) {
  this.options.push(option)
}

export default Question
