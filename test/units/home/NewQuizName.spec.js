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
    expect(wrapper.find('input.input-field')).to.have.lengthOf(1);
  })

  it('includes whatever is passed as name in props as value in input field', () => {
    wrapper.setProps({name: 'quiz name'})
    expect(wrapper.find('input.input-field').props().value).to.be.equal('quiz name')
  })

  it('includes whatever is passed as placeholder in props as placeholder in input field', () => {
    wrapper.setProps({placeholder: 'Add your quiz name'})
    expect(wrapper.find('input.input-field').props().placeholder).to.be.equal('Add your quiz name')
  })

});
