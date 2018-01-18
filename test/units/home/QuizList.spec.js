import React from 'react';
import QuizList from '../../../src/components/home/QuizList';

describe('QuizList item', () => {
  const quizzes = [{ id: 1, name: 'test' }]
  const wrapper = shallow(<QuizList quizzes= { quizzes }/>);

  it('should be a div item', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('contains an a tag with a link to the quiz', () => {
    expect(wrapper.find('a').props().href).to.contain('/quiz/1')
  });

  it('contains a li tag with the name of the quiz', () => {
    expect(wrapper.find('li').text()).to.eql('test')
  });

  it('contains a button that when click deletes a quiz', () => {
    let fakeHandleClickDeleteQuiz = spy()
    wrapper.setProps({ handleClickDeleteQuiz: fakeHandleClickDeleteQuiz })
    wrapper.find('button').simulate('click')
    expect(fakeHandleClickDeleteQuiz.calledWith(1)).to.be.equal(true)
  });

});
