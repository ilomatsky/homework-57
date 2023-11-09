import React from 'react';
import {User} from '../../types';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  return (
    <div>
      <h5>{user.name}</h5>
      <p>Email: {user.email}</p>
      <p>Активен: {user.checkbox ? 'Да' : 'Нет'}</p>
      <p>Роль: {user.role}</p>
    </div>
  );
};

export default UserItem;