import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const cardBoard = styled.div`
  width: 250px;
  height: 50px;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  border: solid 1px white;
  align-items: center;
  justify-content: center;
`;

// Componente ProfileTag
export const UserProfileTag = ({ onClick, label }) => {
  return <cardBoard onClick={onClick}>
    {label}
    </cardBoard>;
}

// Definir tipos de props
UserProfileTag.propTypes = {
  label: PropTypes.string.isRequired
};

// Definir valores por defecto
UserProfileTag.defaultProps = {
  label: 'User Profile'
};
