import React, { Component } from 'react';
import Button from '../quizbuilder/Button'

function copyLink() {
  if(document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById('shareable-link'));
    range.select().createTextRange();
    document.execCommand("copy")
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById('shareable-link'));
    window.getSelection().addRange(range);
    document.execCommand("copy");
  }
}

class ShareableLink extends Component {

  hasId() {
    return new URLSearchParams(window.location.search).get('id') !== null
  }

  buildURL() {
    return `${window.location.href}?id=${this.props.wsId}`
  }

  getURL() {
    if(this.hasId()) {
      return window.location.href
    } else if (this.props.wsId) {
      return this.buildURL()
    }
  }

  render() {
    let URL = this.getURL()
    if(URL){
      return(
        <div style={localStyles.linkRow}>
          <div>Your shareable URL is
            <p id='shareable-link'>
              {URL}
            </p>
        </div>
        <Button
          text='Copy Link'
          callback={copyLink}
        />
        </div>
      )
    } else {
      return (
        <div> </div>
      )
    }
  }
}

const localStyles = {
  linkRow: {
    display: 'flex',
    flexDirection: 'row',
    padding: '5px',
  },
}


export default ShareableLink
