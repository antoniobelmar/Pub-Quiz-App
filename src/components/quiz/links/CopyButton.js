import React, { Component } from 'react';
import Button from '../../quizbuilder/Button'

function copyLink() {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById('shareable-link'));
    range.select().createTextRange();
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById('shareable-link'));
    window.getSelection().addRange(range);
  };
  document.execCommand("copy");
};

class CopyButton extends Component {
  render() {
    return (
      <Button
        text='Copy Link'
        callback={copyLink}
      />
    );
  };
};

export default CopyButton;
