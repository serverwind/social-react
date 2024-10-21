import { useEffect } from "react";
import { connect } from "react-redux";
import Friends from "./Friends";
import { getUsersTC, changePageTC } from "../../data/usersReducer";

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
  auth: {
    isAuth: boolean;
  };
};

function mapStateToProps(state: StateType) {
  return {
    users: state.users.users,
    currentPage: state.users.currentPage,
    pageSize: state.users.pageSize,
    totalPages: state.users.totalPages,
    isLoading: state.users.isLoading,
    isAuth: state.auth.isAuth,
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
  auth: {
    isAuth: boolean;
  };
};

function FriendsAPIComponent(props: FriendsAPIComponentType) {
  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize);
  }, []);

  function onPageChanged(pageNumber: number) {
    props.changePage(pageNumber, props.pageSize);
  }

  return (
    <section>
      <Friends users={props.users} totalPages={props.totalPages} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={onPageChanged} isLoading={props.isLoading} auth={props.isAuth} />
    </section>
  );
}

export const FriendsContainer = connect(mapStateToProps, actionCreators)(FriendsAPIComponent);
