import PropTypes from 'prop-types';
import React from 'react';

function Alert({ children }) {
  return (
    <div
      className="animate-bounce delay-200 shadow-md mt-8 absolute abs-center w-64 h-auto p-4 text-center text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
      role="alert">
      {children}
    </div>
  );
}

Alert.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Alert;
