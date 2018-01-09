const mongoose = require('./setup').mongoose
const Question = require('./question');

const quizSchema = mongoose.Schema({  // SHAPE
    name: String,
    questions: []
});

const Quiz = mongoose.model('quiz', quizSchema); // Collection (table)

const questionFrance = new Question({
  type: 'MultipleChoice',
  text: 'What is the capital of the France',
  options: ['Rome', 'London', 'Paris'],
  answer: [2]
});

const makersQuiz =  new Quiz({name : 'Makers Quizz'}); // Document(data in the collection/table)

makersQuiz.questions.push(questionFrance)

makersQuiz.save(function (err, quiz) {
  if (err) {
    console.error('Could not save');
  }else{
    console.log(quiz.id)
  }
});
