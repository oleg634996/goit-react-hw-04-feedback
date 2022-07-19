import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedBack/FeedBack';
import Statistics from "./Statistics/Statistics"


export const App = () => {
   const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const appendFeedback = (options) => {

    switch (options) {
      case "good":
        setGood((prevState) => prevState + 1)
        break;
       case "neutral":
        setNeutral((prevState) => prevState + 1)
        break;
       case "bad":
        setBad((prevState) => prevState + 1)
        break;
    
      default:
        break;
    }
  }

  const total = () =>good + neutral + bad 
  const positiveFeedback =()=>total() ? Math.round(((good + neutral) * 100) / total()) : 0;

  return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good","neutral","bad"]}
          onLeaveFeedback={appendFeedback}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total()}
          positivePercentage={positiveFeedback()}
        />
      </Section>
    );
};
