import { reduxForm, Field } from "redux-form";

function PostForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className="flex gap-2 my-4">
      <Field className={ `border border-gray-300 p-2 w-full lg:w-2/5 ${props.theme.bg} ${props.theme.text}` } type="text" name="text" component="input" />
      <button onClick={props.onNewPost} className={ `border ${props.theme.bg}` }>
        <span className="mgc_send_fill py-2 px-4"></span>
      </button>
    </form>
  );
}

const ReduxPostForm = reduxForm({ form: "posts" })(PostForm);

export default function Input(props) {

  function onNewPost(formData) {
    const id: number = props.posts.posts.length + 1;
    props.newPost(id, formData.text, 0, "Alex Lestra", "Today");
  }

  return <ReduxPostForm onSubmit={onNewPost} theme={props.theme} />
  
}
