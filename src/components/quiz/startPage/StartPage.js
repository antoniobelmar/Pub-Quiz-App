import React, { Component } from 'react';
import LeaderSection from './LeaderSection';
import GeneralSection from './GeneralSection';
import ShareableLink from '../links/ShareableLink';
import './StartPage.css'

class StartPage extends Component {
  render() {
    return(
      <div>
        <div>
          { this.props.leader && 
            <LeaderSection />
          }
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
