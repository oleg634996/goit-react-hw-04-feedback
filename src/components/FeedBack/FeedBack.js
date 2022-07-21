import PropTypes from 'prop-types';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option, index) => {
        return (
          <button
            key={index}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
