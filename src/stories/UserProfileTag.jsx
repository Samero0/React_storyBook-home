import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardBoard = styled.div`
  width: 250px;
  height: 50px;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  border: solid 1px #e0e0e0;
  align-items: center;
  justify-content: flex-start;
`;

const PictureContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  border: solid 1px #e0e0e0;
`;

const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Componente ProfileTag
export const UserProfileTag = ({ onClick, label, imageUrl }) => {
  return <CardBoard onClick={onClick}>
      <PictureContainer>
        
        <ProfilePicture scr={imageUrl} alt={label}></ProfilePicture>
      
      </PictureContainer>
    </CardBoard>;
}

// Definir tipos de props
UserProfileTag.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  imageUrl: PropTypes.string,
};

// Definir valores por defecto
UserProfileTag.defaultProps = {
  label: 'User Profile',
  onClick: () => {console.log('Click en la caja')},
  //imagen por defecto
  imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
};
