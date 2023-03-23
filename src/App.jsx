import React, { Component } from 'react';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import StatisticElement from 'components/StatisticElement/StatisticElement';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return bad + good + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return this.countTotalFeedback()
      ? Math.round((good * 100) / this.countTotalFeedback())
      : 0;
  };

  onLeaveFeedback = el => this.setState(prev => ++prev[el]);

  render() {
    return (
      <>
        <Section title="Please leave feadback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <StatisticElement
              {...this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
