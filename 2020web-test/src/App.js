import react, { useRef, useState } from 'react';
import './App.css';
import Signup from './components/signup/Signup'
import UserList from './components/UserList';

const User = ({ user, onRemove }) => {
  return (
    <div>
      id : <span>{user.id}</span> /  
      name : <span>{user.name}</span> / 
      phone : <span>{user.phone}</span> / 
      email : <span>{user.email}</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

const App = () =>{
  const [ inputs, setInputs ] = useState({
    id: '',
    pw: '',
    name: '',
    phone: '',
    email: '',
  })

  const { id, pw, name, phone, email } = inputs;

  const onChange = (e) => {
      const { value, name } = e.target;

      setInputs({
          ...inputs,
          [name]: value
      });
  };


  const [users, setUsers] = useState([ {} ]);

  const onCreate = () => {
    const user = {
      id,
      pw,
      name,
      phone,
      email
    };

    console.log(user);

    setUsers(users.concat(user));

    console.log(users);

    setInputs({
      id: '',
      pw:'',
      name: '',
      phone: '',
      email: '',
    });
  };

  const onRemove = id => {

    setUsers(users.filter(user => user.id !== id));
  };
  
  return(
    <div>
      <Signup
        id={id}
        pw={pw}
        name={name}
        phone={phone}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <div>
        {users.map(user => (
          <User user={user} key={user.id} onRemove={onRemove}/>
        ))}
      </div>
    </div>
  )
}

export default App;