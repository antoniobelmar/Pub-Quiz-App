import Option from './Option';

function Question(option = new Option()) {
  this.placeholder = "Add your question";
  this.type = '';
  this.text =  '';
  this.options = [option];
  this.answer= [{text: ''}];
}

export default Question
