import PropTypes from 'prop-types';
import { Note } from './Notification.styled';

function Notification({ message }) {
  return <Note>{message}</Note>;
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
