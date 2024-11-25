import { useState } from "react";
import { reduxForm, Field } from "redux-form";
import { requiredField, maxLengthCreator, minLengthCreator } from "../../../utils/validators";
import FormsControl from "../../common/FormsControl";

function StatusForm(props) {
  const [edit, setEdit] = useState(false);

  function onEdit() {
    setEdit(true);
  }

  function onSave(formData) {
    setEdit(false);
    props.updateStatus(formData.text);
  }

  return (
    <>
      {edit ? (
        <form onSubmit={props.handleSubmit(onSave)} className="flex gap-2">
          <Field component={FormsControl} autoFocus type="text" validate={[requiredField, maxLengthCreator(10), minLengthCreator(2)]} name="text" />
          <button type="submit">Save</button>
        </form>
      ) : (
        <span onClick={onEdit}>{props.status.status ? props.status.status : "Click here to add your status"}</span>
      )}
    </>
  );
}

const ReduxStatusForm = reduxForm({ form: "statusForm" })(StatusForm);

export default function Status(props) {
  return (
    <div className="flex gap-1 items-center">
      <span className="mgc_celebrate_fill"></span>
      <ReduxStatusForm status={props.status} updateStatus={props.updateStatus} />
    </div>
  );
}
