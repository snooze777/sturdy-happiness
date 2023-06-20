/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react';

const BoilingVedict = ({ celsius }) => {
  if (celsius >= 100) {
    return <h1>L'eau bout</h1>;
  }

  if (celsius > 0) {
    return <h1>L'eau ne bout pas</h1>;
  }

  return <h1>L'eau gèle</h1>;
};

export default BoilingVedict;
