import Togglable from "./Togglable";

const LoginForm = ({ handleLoginSubmit, handleChangeUserName}) => {
  const [username, setUsername, password, setPassword] = handleChangeUserName;

  return (
    <div>
      <Togglable buttonLabel='Show Login'>
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
      </Togglable>
    </div>
  )
}

export default LoginForm;
