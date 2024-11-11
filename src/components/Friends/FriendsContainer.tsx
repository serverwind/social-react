import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Friends from "./Friends";
import { getUsersTC, changePageTC } from "../../data/usersReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import loadTheme from "../../utils/loadTheme";

const actionCreators = {
  getUsers: getUsersTC,
  changePage: changePageTC,
};

type StateType = {
  users: {
    users: [];
    currentPage: number;
    pageSize: number;
    totalPages: number;
    isLoading: boolean;
  };
  settings: {
    theme: string;
  };
};

function mapStateToProps(state: StateType) {
  return {
    users: state.users.users,
    currentPage: state.users.currentPage,
    pageSize: state.users.pageSize,
    totalPages: state.users.totalPages,
    isLoading: state.users.isLoading,
    theme: state.settings.theme,
  };
}

type FriendsAPIComponentType = {
  users: [];
  currentPage: number;
  pageSize: number;
  totalPages: number;
  setUsers: Function;
  setTotalPages: Function;
  setCurrentPage: Function;
  setIsLoading: Function;
  getUsers: Function;
  changePage: Function;
  isLoading: boolean;
  isAuth: boolean;
  theme: {
    bg: string;
    text: string;
  };
};

function FriendsAPIComponent(props: FriendsAPIComponentType) {
  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize);
  }, []);

  function onPageChanged(pageNumber: number) {
    props.changePage(pageNumber, props.pageSize);
  }

  const theme = loadTheme(props.theme);

  return (
    <section>
      <Friends users={props.users} totalPages={props.totalPages} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={onPageChanged} isLoading={props.isLoading} theme={theme} />
    </section>
  );
}

export default compose(connect(mapStateToProps, actionCreators), withAuthRedirect)(FriendsAPIComponent);
