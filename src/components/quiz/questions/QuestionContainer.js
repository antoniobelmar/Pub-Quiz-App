import React, { Component } from 'react';
import MCQuestion from './MCQuestion';
import TextQuestion from './TextQuestion';
import ShareableLink from '../links/ShareableLink';

class QuestionContainer extends Component {
  render() {
    let question = this.props.question;
    return (
      <div>
        { question.type == 'MultipleChoice' &&
          <MCQuestion {...this.props} />
        }
        { question.type == 'text' &&
          <TextQuestion {...this.props} />
        }
        <ShareableLink
          wsId={this.props.wsId}
        />
      </div>
    );
  };
};

export default QuestionContainer;
