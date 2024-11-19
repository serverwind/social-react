import Status from "./Status";
import { connect } from "react-redux";
import { setStatusAC, changeStatusTextAC } from "../../../data/profileReducer";

type StatusContainerProps = {
    status: {
      status: string;
      input: string;
    };
    setStatus: () => void;
  changeText: () => void;
};

function StatusContainer(props: StatusContainerProps) {
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
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusContainer);
