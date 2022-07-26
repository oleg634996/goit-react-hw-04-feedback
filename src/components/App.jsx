import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedBack/FeedBack';
import Statistics from "./Statistics/Statistics"
import Notification from './Notification/Notification';


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
  const positiveFeedback =()=>total() ? Math.round((good * 100) / total()) : 0;
  const objectKeys = Object.keys({ good, neutral, bad })

  return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={objectKeys}
          onLeaveFeedback={appendFeedback}
        />
      {total() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total()}
          positivePercentage={positiveFeedback()}
        />) : (
        <Notification message="There is no feedback" />)}
    
      </Section>
    );
};
