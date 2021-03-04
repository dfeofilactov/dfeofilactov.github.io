import React from 'react';
import { Card } from '~/shared/components';
import './Profile.scss';

const Profile: React.FC = () => {
  return (
    <Card className="profile">
      <Card.Title>Denis Feofilactov</Card.Title>
      <Card.Label id="work-position" bold>
        React frontend developer
      </Card.Label>
      <Card.Label>denis.feofilactov@gmail.com</Card.Label>
      <Card.Label>+380965582715</Card.Label>
    </Card>
  );
};

export default Profile;
