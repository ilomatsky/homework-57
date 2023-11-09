import React, {useState} from 'react';
import {User, UserMutation} from '../../types';

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<UserMutation>({
    name: '',
    email: '',
    checkbox: false,
    role: '',
  });

  const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUser((prev) => ({
      ...prev,
        [e.target.name]: e.target.value,
    }));
  };

  return (
    <form>
      <h4>Add new user</h4>
      <div className="form-group mb-3">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={user.name}
          onChange={changeUser}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          value={user.email}
          onChange={changeUser}
        />
      </div>
      <div className="form-check mb-3">
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          className="form-check-input"
          value={user.checkbox}
          onChange={changeUser}
        />
        <label className="form-check-label" htmlFor="isActive">
          Активен
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="role" className="form-label">
          Роль:
        </label>
        <select
          id="role"
          className="form-select"
          value={user.role}
          onChange={changeUser}
        >
          <option value="user">Пользователь</option>
          <option value="editor">Редактор</option>
          <option value="admin">Администратор</option>
        </select>
      </div>
      <button type="submit" className="btn btn-success">
        Добавить пользователя
      </button>
    </form>
  );
};

export default UserForm;