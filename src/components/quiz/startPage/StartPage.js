import React, { Component } from 'react';
import LeaderSection from './LeaderSection';
import GeneralSection from './GeneralSection';
import ShareableLink from '../links/ShareableLink';
import './StartPage.css'

class StartPage extends Component {
  render() {
    return (
      <div>
        <div>
            <h1 className='pub-title' id='titleApp'>Pub-Quiz</h1>
          { this.props.leader &&
            <LeaderSection />
          }
        </div>
        <div>
          <GeneralSection
            startQuiz={this.props.startQuiz}
            disabled={this.props.disabled}
          />
        </div>
        <div>
          <ShareableLink wsId={this.props.wsId}/>
        </div>
      </div>
    );
  };
};

export default StartPage;
