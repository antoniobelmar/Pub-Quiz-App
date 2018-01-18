import React from 'react';
import NewQuizQuestionType from '../../../src/components/quizbuilder/NewQuizQuestionType';

describe('NewQuizQuestionType', () => {
  const wrapper = shallow(<NewQuizQuestionType />);

  it('should be a div item', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('When the question type is selected the function handleChangeQuestionType is called', () => {
    let fakeHandleChangeQuestionType = spy()
    wrapper.setProps( {handleChangeQuestionType: fakeHandleChangeQuestionType, questionIndex: 1} )
    wrapper.find('#select-question-type').simulate('change', { target: {value: 'Marco' } })
    expect(fakeHandleChangeQuestionType.calledWith(1)).to.be.equal(true)
  });

});
