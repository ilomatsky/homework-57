import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import {useState} from 'react';
import {User} from './types';

const App = () => {
  const [user, setUser] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUser((prev) => [...prev, user]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <UserForm onSubmit={addUser} />
        </div>
        <div className="col-6">
          <Users/>
        </div>
      </div>
    </div>
  );
};

export default App;
