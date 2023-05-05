import { useState } from 'react';

const LoginForm = ({ handleLoginSubmit, handleChangeUserName}) => {
  // UseState
  const [loginVisible, setLoginVisible] = useState(false);

  const [username, setUsername, password, setPassword] = handleChangeUserName;
  
  // Line Styles
  const hideWhenVisible = { display: loginVisible ? 'none' : '' }
  const showWhenVisible = { display: loginVisible ? '' : 'none' }

  return (
    <div>

      <div style={hideWhenVisible}>
        <button onClick={() => setLoginVisible(true)}>Show Login</button>
      </div>

      <div style={showWhenVisible}>
        <h1>Login</h1>
      
        <form onSubmit={handleLoginSubmit}>
          <input
            type="text"
            value={username}
            name="Username"
            placeholder="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
          <input
            type="password"
            value={password}
            name="Password"
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <button>Login</button>
        </form>

        <button onClick={() => setLoginVisible(false)}>Cancel</button>
      </div>
    </div>
  )
}

export default LoginForm;
