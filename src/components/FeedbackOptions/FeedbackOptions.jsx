import PropTypes from 'prop-types';
import { Ul, Button } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Ul>
      {options.map(el => (
        <li key={el}>
          <Button onClick={() => onLeaveFeedback(el)}>{el}</Button>
        </li>
      ))}
    </Ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
