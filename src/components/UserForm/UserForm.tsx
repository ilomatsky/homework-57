import React, {useState} from 'react';
import {User} from '../../types';

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<User>({
    id: 0,
    name: '',
    email: '',
    checkbox: false,
    role: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    setUser({
      id: 0,
      name: '',
      email: '',
      checkbox: false,
      role: '',
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setUser((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4 className="mb-5">Add new user</h4>
      <div className="form-group mb-3">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={user.name}
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        />
      </div>
      <div className="form-check mb-3">
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          className="form-check-input"
          checked={user.checkbox}
          onChange={handleInputChange}
        />
        <label className="form-check-label" htmlFor="checkbox">
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
          name="role"
          value={user.role}
          onChange={handleInputChange}
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