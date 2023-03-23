import PropTypes from 'prop-types';
import { H2, Wrap } from './Section.styled';

function Section({ title, children }) {
  return (
    <Wrap>
      <H2>{title}</H2>
      {children}
    </Wrap>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};

export default Section;
