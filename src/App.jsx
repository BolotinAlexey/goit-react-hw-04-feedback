import React, { useState } from 'react';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import StatisticElement from 'components/StatisticElement/StatisticElement';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return bad + good + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? Math.round((good * 100) / countTotalFeedback())
      : 0;
  };

  const onLeaveFeedback = el => {
    switch (el) {
      case 'good':
        return setGood(p => ++p);

      case 'neutral':
        return setNeutral(p => ++p);

      case 'bad':
        return setBad(p => ++p);

      default:
        return;
    }
  };

  return (
    <>
      <Section title="Please leave feadback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <StatisticElement
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

export default App;
