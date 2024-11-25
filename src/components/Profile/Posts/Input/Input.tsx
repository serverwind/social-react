import { reduxForm, Field } from "redux-form";
import { requiredField, maxLengthCreator, minLengthCreator } from "../../../../utils/validators";
import FormsControl from "../../../common/FormsControl";

function PostForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className="flex gap-2 my-4">
      <Field className={`relative p-2 w-full ${props.theme.bg} ${props.theme.text}`} type="text" name="text" component={FormsControl} validate={[requiredField, maxLengthCreator(10), minLengthCreator(2)]} />
      <button onClick={props.onNewPost} className={`border ${props.theme.bg}`}>
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

  return <ReduxPostForm onSubmit={onNewPost} theme={props.theme} />;
}
