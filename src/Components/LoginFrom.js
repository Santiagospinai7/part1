const LoginForm = ({ handleLoginSubmit, handleChangeUserName}) => {
  const [username, setUsername, password, setPassword] = handleChangeUserName;
  
  return (
    <div>
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
    </div>
  )
}

export default LoginForm;
