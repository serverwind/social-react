import Status from "./Status";
import { connect } from "react-redux";
import { setStatusAC, changeStatusTextAC } from "../../../data/profileReducer";
import { showStatusTC } from "../../../data/profileReducer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

type StatusContainerProps = {
    status: {
      status: string;
      input: string;
    };
  setStatus: () => void;
  changeText: () => void;
  showStatus: (id: number) => void
};

function StatusContainer(props: StatusContainerProps) {
  const userIdPara = useParams();
  let userId = userIdPara.userId || 2; // if undefined set 2

  useEffect(() => {
    props.showStatus(userId);
  })

  return <Status status={props.status} setStatus={props.setStatus} changeText={props.changeText} />;
}

type StateType = {
  profile: {
    status:{}
  }
};

const mapStateToProps = (state: StateType) => {
  return {
    status: state.profile.status, 
  };
};

let mapDispatchToProps = {
  setStatus: setStatusAC,
  changeText: changeStatusTextAC,
  showStatus: showStatusTC
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusContainer);
