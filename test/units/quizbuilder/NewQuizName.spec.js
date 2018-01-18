import React from 'react';
import NewQuizName from '../../../src/components/quizbuilder/NewQuizName';

describe('NewQuizName item', () => {
  const wrapper = shallow(<NewQuizName />);

  it('should be a div item', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('contains the h1 tag rendering Quiz Name', () => {
    expect(wrapper.contains(<h1> Quiz Name </h1>)).to.equal(true);
  });

  it('contains an input field', () => {
    expect(wrapper.find('#quiz-name-input')).to.have.lengthOf(1);
  })

  it('includes whatever is passed as name in props as value in input field', () => {
    wrapper.setProps({name: 'quiz name'})
    expect(wrapper.find('#quiz-name-input').props().value).to.be.equal('quiz name')
  })

  it('includes whatever is passed as placeholder in props as placeholder in input field', () => {
    wrapper.setProps({placeholder: 'Add your quiz name'})
    expect(wrapper.find('#quiz-name-input').props().placeholder).to.be.equal('Add your quiz name')
  })

  it('when something is written in the text box "handleChangeName" is called', () => {
    let fakeHandleChangeName = spy()
    wrapper.setProps({handleChangeName: fakeHandleChangeName})
    wrapper.find('#quiz-name-input').simulate('change', {target: {value: 'Marco'}})
    expect(fakeHandleChangeName.called).to.be.equal(true)
  });
});
