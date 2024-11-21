function LoginForm() {
  return (
      <form className="flex flex-col gap-4">
        <label className="flex gap-2">
          <span>Username</span>
          <input type="text" name="username" className="border border-gray-300" />
        </label>
        <label className="flex gap-3">
          <span>Password</span>
          <input type="password" name="password" className="border border-gray-300" />
        </label>
        <label className="flex gap-1">
          <input type="checkbox" name="remember" />
          <span>Remember me</span>
        </label>
        <button className="bg-gray-200 text-sm py-2 px-4 hover:bg-gray-300 transition duration-300 w-1/4" type="submit">Login</button>
      </form>
  )
}

export function Login() {
  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold mb-4">Login Form</h1>
      <LoginForm />
    </section>
  );
}
