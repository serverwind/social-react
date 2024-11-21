import { reduxForm, Field } from 'redux-form';

function LoginForm(props) {
  return (
      <form onSubmit={props.handleSubmit} className="flex flex-col gap-4">
        <label className="flex gap-2">
          <span>Username</span>
          <Field component="input" type="text" name="username" className="border border-gray-300" />
        </label>
        <label className="flex gap-3">
          <span>Password</span>
          <Field component="input" type="password" name="password" className="border border-gray-300" />
        </label>
        <label className="flex gap-1">
          <Field component="input" type="checkbox" name="remember" />
          <span>Remember me</span>
        </label>
        <button className="bg-gray-200 text-sm py-2 px-4 hover:bg-gray-300 transition duration-300 w-1/4" type="submit">Login</button>
      </form>
  )
}

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);

export function Login() {
  const onSubmit = (formData) => {
    //here we got all form data!
    console.log(formData);
  }

  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold mb-4">Login Form</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </section>
  );
}
