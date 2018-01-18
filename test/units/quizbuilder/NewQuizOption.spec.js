import React from 'react';
import NewQuizOption from '../../../src/components/quizbuilder/NewQuizOption';

describe('NewQuizOption item', () => {
  const optionObject = { _placeholder: 'Marco' }
  const wrapper = shallow(<NewQuizOption option= { optionObject }/>);

  it('should be a div item', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('when something is written in the text input, the function "handleChangeOption" is called', () => {
    let fakeHandleChangeOption = spy()
    wrapper.setProps({ handleChangeOption: fakeHandleChangeOption })
    wrapper.find('#new-option-input').simulate('change', {target: {value: 'Marco' }})
    expect(fakeHandleChangeOption.called).to.be.equal(true)
  });

  it('contain a div which in base of a props shows the answer\'s index ', () => {
    wrapper.setProps({ index: 1 })
    expect(wrapper.find('.a').text()).to.equal('A2');
  });

  it('its input tag should have as placeholder \'Marco\' ', () => {
    expect(wrapper.find('#new-option-input').props().placeholder).to.be.equal('Marco')
  });

});
