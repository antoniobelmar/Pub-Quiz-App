import React from 'react';
import Button from '../../../src/components/quizbuilder/Button';

describe('Button item', () => {
  const wrapper = shallow(<Button />)

  it('when the button tag is clicked a callback function is run', () => {
    let fakeCallBack = spy()
    wrapper.setProps({ callback: fakeCallBack, arg1: "", arg2: ""})
    wrapper.find('#general-quiz-button').simulate('click')
    expect(fakeCallBack.calledWith("", "")).to.equal(true);
  });

  it('ensures the button text is what is passed as props', function() {
    wrapper.setProps({ text: 'button'})
    expect(wrapper.find('#general-quiz-button').text()).to.equal('button')
  })

});
