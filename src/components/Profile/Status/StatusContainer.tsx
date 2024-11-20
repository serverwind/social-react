import Status from "./Status";
import { connect } from "react-redux";
import { setStatusAC, changeStatusTextAC, updateStatusTC } from "../../../data/profileReducer";
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
  updateStatus: () => void
};

function StatusContainer(props: StatusContainerProps) {
  const userIdPara = useParams();
  let userId = userIdPara.userId || 31894; // if undefined set my profile

  useEffect(() => {
    props.showStatus(userId);
  }, [userId]);

  return <Status status={props.status} setStatus={props.setStatus} changeText={props.changeText} updateStatus={props.updateStatus} />;
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
  showStatus: showStatusTC,
  updateStatus: updateStatusTC
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusContainer);
