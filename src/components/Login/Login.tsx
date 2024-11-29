import { reduxForm, Field } from 'redux-form';
import { requiredField, maxLengthCreator, minLengthCreator } from "../../utils/validators";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginUserTC } from "../../data/authReducer";
import FormsControl from "../../components/common/FormsControl";

function LoginForm(props) {
  return (
      <form onSubmit={props.handleSubmit} className="flex flex-col gap-4">
        <label className="flex gap-2">
          <span>E-mail</span>
          <Field component={FormsControl} validate={[requiredField, maxLengthCreator(30), minLengthCreator(2)]} type="text" name="email" className="border border-gray-300" />
        </label>
        <label className="flex gap-3">
          <span>Password</span>
          <Field component={FormsControl} validate={[requiredField, maxLengthCreator(10), minLengthCreator(2)]} type="password" name="password" className="border border-gray-300" />
        </label>
        <label className="flex gap-1">
          <Field component="input" type="checkbox" name="rememberMe" />
          <span>Remember me</span>
        </label>
        <button className="bg-gray-200 text-sm py-2 px-4 hover:bg-gray-300 transition duration-300 w-1/4" type="submit">Login</button>
        { props.error ? <div>{props.error}</div> : null }
      </form>
  )
}

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);

function Login(props) {
  const onSubmit = (formData) => {
    props.loginUserTC(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Navigate replace to={`/profile`} />
  }

  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold mb-4">Login Form</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </section>
  );
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginUserTC})(Login);
