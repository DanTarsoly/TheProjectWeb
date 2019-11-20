import { FormEvent, ChangeEvent, useState} from 'react';
import Router from 'next/router'
import * as authApi from '../../api/auth';
import ErrorBox from '../ErrorBox';


const LoginComp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    authApi.basic(email, password)
      .then(authData => {
        localStorage.setItem('jwt', authData.token);
        Router.replace('/');
      })
      .catch(err => setError(err.message));
    event.preventDefault();
  }

  const updateEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const updatePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  return (
    <form className="login-form"
        onSubmit={handleSubmit}
        style={loginStyle}>
      <h1>Log in</h1>
      {error && <ErrorBox>{error}</ErrorBox>}
      <button type="button" style={buttonStyle}>Facebook</button>
      <button type="button" style={buttonStyle}>Google</button>
      <input 
          type="email"
          name="email"
          placeholder="Email"
          onChange={updateEmail}
          style={inputStyle}/>
      <input 
          type="password" 
          name="password"
          placeholder="Password"
          onChange={updatePassword}
          style={inputStyle}/>
      <button style={buttonStyle}>Log in</button>
    </form>
  )
}

const loginStyle = {
  padding: 20,
  margin: 20,
  border: '1px solid #DDD',
  borderRadius: 4
}

const buttonStyle = {
  marginTop: '5px',
  marginRight: '5px'
}

const inputStyle = {
  display: 'block',
  marginTop: '5px'
}

export default LoginComp;