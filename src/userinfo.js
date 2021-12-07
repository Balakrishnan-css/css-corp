import React from 'react';
import PropTypes from 'prop-types';

const Userinfo = ({ firstname, lastname }) => (
  <>
    {`Welcome`} {firstname}{lastname}!
  </>
);

Userinfo.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};

export default Userinfo;
