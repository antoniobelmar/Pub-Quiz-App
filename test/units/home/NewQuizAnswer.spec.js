import React from 'react';
import NewQuizAnswer from '../../../src/components/quizbuilder/NewQuizAnswer';


describe('NewQuizAnswer item', () => {
  const optionsArray = [{ _text: 'Allan' }]
  const wrapper = shallow(<NewQuizAnswer options= { optionsArray }/>);

  it('should be a div item', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('should have a div tag containing the word "Answer"', () => {
    expect(wrapper.contains(<div> Answer </div>)).to.equal(true);
  });

  it('contains a select tag', () => {
    expect(wrapper.find('#answer-selection')).to.have.lengthOf(1)
  });

  it('should contain "select the correct answer"', () => {
    expect(wrapper.find('#select-answer-text').text()).to.be.equal('Select the correct answer')
  });

  it('should  contain the options "Allan" ', () => {
    expect(wrapper.find('#answer-option0').props().value).to.be.equal('Allan')
  });

  it('when selected one option handleChangeAnswer is called', () => {
    let fakeHandleChangeAnswer = spy()
    wrapper.setProps({ handleChangeAnswer: fakeHandleChangeAnswer })
    wrapper.find('#answer-selection').simulate('change', {target: {value : 'Allan' }})
    expect(fakeHandleChangeAnswer.called).to.be.equal(true)
  });

});
