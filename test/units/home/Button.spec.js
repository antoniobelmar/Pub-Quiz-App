import React from 'react';
import Button from '../../../src/components/quizbuilder/Button';

describe('Button item', () => {
  const wrapper = shallow(<Button />)

  it('should be a div item', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('when the button tag is clicked a callback function is run', () => {
    let fakeCallBack = spy()
    wrapper.setProps({ callback: fakeCallBack})
    wrapper.find('#general-quiz-button').simulate('click')
    expect(fakeCallBack.calledOnce).to.equal(true);
  });

});
