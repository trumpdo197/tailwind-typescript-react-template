export const Login = () => {
  return (
    <div className="flex justify-center">
      <div>
        <h1>Login</h1>
        <div className="mt-4">
          <input placeholder="username"></input>
        </div>

        <div className="mt-4">
          <input type="password" placeholder="password" />
        </div>
      </div>
    </div>
  );
};

export default Login;
