import React, { Component } from 'react';
import CopyButton from './CopyButton';

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
    if (URL) {
      return (
        <div>
          <div className='link'>
            <p className='shareable-link' >Your shareable link:</p>
            <p className='url' id='shareable-link'>{URL}</p>
          </div>
          <div className='copy-button'>
            <CopyButton />
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    };
  };
};

// const localStyles = {
//   linkRow: {
//     display: 'flex',
//     flexDirection: 'row',
//     padding: '5px',
//   },
// }


export default ShareableLink
