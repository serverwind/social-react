import { useState, useRef } from "react";

type StatusProps = {
  status: {
    status: string;
    input: string;
  };
  setStatus: (text: string) => void;
  changeText: (text: string) => void;
  updateStatus: (text: string) => void;
};

export default function Status(props : StatusProps) {
  const [edit, setEdit] = useState(false);
  
  function onEdit() {
    setEdit(true);
  }

  function onSave() {
    setEdit(false);
    props.updateStatus(props.status.input);
  }

  let newStatusText = useRef<HTMLInputElement>(null);

  function onStateText() {
    if (newStatusText.current) {
      let text : string = newStatusText.current.value;
      props.changeText(text);
    }
  }

  return (
    <div className="flex gap-1 items-center">
      <span className="mgc_celebrate_fill"></span>  
      {edit ? <input onBlur={onSave} ref={newStatusText} onChange={onStateText} autoFocus type="text" value={props.status.input} /> : <span onClick={onEdit}>{props.status.status}</span>}
    </div>
  );
}
