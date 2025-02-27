import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Estilos de la caja usando Styled Components
const StyledBox = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  background-color: ${({ primary }) => (primary ? '#555ab9' : '#ddd')};
  color: ${({ primary }) => (primary ? 'white' : 'black')};
  cursor: pointer;
  &:hover{
    background-color: ${({ hovered }) => (hovered ? '#123456' : null)};
  }
`;

// Componente Box
export const Box = ({ primary = false, label, hovered = false, onClick }) => {
  return <StyledBox primary={primary} hovered={hovered} onClick={onClick}>
    {label}
    </StyledBox>;
};

// Definir tipos de props
Box.propTypes = {
  /** Define si la caja es primaria o secundaria */
  primary: PropTypes.bool,
  /** Texto dentro de la caja */
  label: PropTypes.string.isRequired,
  /** Define si la caja tendrá la propiedad hover en ella */ 
  hovered: PropTypes.bool,
  /** Evento de click */
  onClick: PropTypes.func
};

// Definir valores por defecto
Box.defaultProps = {
  primary: false,
  hovered: false,
  label: 'Caja',
  onClick: () => {console.log('Click en la caja')}
};
