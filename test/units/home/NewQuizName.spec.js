import React from 'react';
import NewQuizName from '../../../src/components/quizbuilder/NewQuizName';

describe('NewQuizName item', () => {
  const wrapper = shallow(<NewQuizName />);

  it('should be a div item', () => {
    expect(wrapper.type()).to.eql('div');
  })
});
