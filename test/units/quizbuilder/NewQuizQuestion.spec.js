import React from 'react';
import NewQuizQuestion from '../../../src/components/quizbuilder/NewQuizQuestion';

describe('NewQuizQuestion', () => {
  const questionObject = { _placeholder: 'Marco', _options: ['Antonio'], _answer: ['Theo'], _text: 'Marie' }
  const wrapper = shallow(<NewQuizQuestion question={questionObject} options={questionObject}/>)

  it('should be a div item', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('contain the index of the question(Q1)', () => {
    wrapper.setProps({index: 0})
    expect(wrapper.contains(<div>Q1</div>)).to.equal(true);
  });

  describe('"#text-input-question" text input', () => {


    it('call the function handleChangeQuestion when something is written in the text area', () => {
      let fakeHandleChangeQuestion = spy()
      wrapper.setProps({ handleChangeQuestion: fakeHandleChangeQuestion, index: 5})
      wrapper.find('#text-input-question').simulate('change', {target: {value : 'Marie'}})
      expect(fakeHandleChangeQuestion.calledWith(5)).to.be.equal(true)
    });

    it('includes whatever is passed as placeholder in props as placeholder in input field', () => {
      expect(wrapper.find('#text-input-question').props().placeholder).to.be.equal('Marco')
    });

    it('includes whatever is passed as question._text in props as value in input field', () => {
      expect(wrapper.find('#text-input-question').props().value).to.be.equal('Marie')
    })

  })
})
