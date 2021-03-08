import React from 'react';
import { Card } from '~/shared/components';
import AvatarSrc from '~/shared/assets/avatar.png';
import './Profile.scss';

const Profile: React.FC = () => {
  return (
    <Card className="profile">
      <Card.Picture className="profile-picture" src={AvatarSrc} alt="Avatar" />
      <div className="contacts">
        <Card.Title>Denis Feofilactov</Card.Title>
        <Card.Label id="work-position" bold>
          React frontend developer
        </Card.Label>
        <Card.Label id="email">denis.feofilactov@gmail.com</Card.Label>
        <Card.Label id="phone">+380965582715</Card.Label>
      </div>
    </Card>
  );
};

export default Profile;
