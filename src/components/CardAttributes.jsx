import React from 'react';
import PropTypes from 'prop-types';
import CardAttribute from './CardAttribute';

function CardAttributes({ handleChange, state }) {
  return (
    <div>
      <CardAttribute
        value={ state.attr01Input }
        handleChange={ handleChange }
        name="attr1-input"
        attr="01"
      />
      <CardAttribute
        value={ state.attr02Input }
        handleChange={ handleChange }
        name="attr2-input"
        attr="02"
      />
      <CardAttribute
        value={ state.attr03Input }
        handleChange={ handleChange }
        name="attr3-input"
        attr="03"
      />
    </div>
  );
}

CardAttributes.propTypes = {
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.shape({
    attr01Input: PropTypes.number,
    attr02Input: PropTypes.number,
    attr03Input: PropTypes.number,
  }).isRequired,
};

export default CardAttributes;
