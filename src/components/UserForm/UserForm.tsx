const UserForm = () => {
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
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
        />
      </div>
      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="isActive"
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
          className="form-select"
          id="role"
        >
          <option value="user">Пользователь</option>
          <option value="editor">Редактор</option>
          <option value="admin">Администратор</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Создать пользователя
      </button>
    </form>
  );
};

export default UserForm;