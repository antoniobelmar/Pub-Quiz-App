import React, { Component } from 'react';

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
        <p> Your shareable URL is {URL} </p>
      )
    } else {
      return (
        <div> </div>
      )
    }
  }
}

export default ShareableLink
