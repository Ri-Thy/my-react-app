function RegisterPage() {
  return (
    <div>
      <h1>Register</h1>

      <form>
        <label>Name</label>
        <br />
        <input type="text" placeholder="Enter your name" />

        <br /><br />

        <label>Email</label>
        <br />
        <input type="email" placeholder="Enter your email" />

        <br /><br />

        <label>Password</label>
        <br />
        <input type="password" placeholder="Create a password" />

        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;