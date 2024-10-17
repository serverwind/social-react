import { useEffect } from "react";
import { connect } from "react-redux";
import { setUsersAC, setCurrentPageAC, setTotalPagesAC, setIsLoadingAC } from "../../data/usersReducer";
import { Friends } from "./Friends";
import { getUsers } from "../../api/api";

let actionCreators = {
  setUsers: setUsersAC,
  setCurrentPage: setCurrentPageAC,
  setTotalPages: setTotalPagesAC,
  setIsLoading: setIsLoadingAC,
};

type StateType = {
  users: {
    users: [];
    currentPage: number;
    pageSize: number;
    totalPages: number;
    isLoading: boolean;
  };
};

function mapStateToProps({ ...state }: StateType) {
  return {
    users: state.users.users,
    currentPage: state.users.currentPage,
    pageSize: state.users.pageSize,
    totalPages: state.users.totalPages,
    isLoading: state.users.isLoading,
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
  isLoading: boolean;
};

function FriendsAPIComponent({ ...props }: FriendsAPIComponentType) {
  useEffect(() => {
    getUsers(props.currentPage, props.pageSize).then((response) => {
      props.setUsers(response.data.items);
      props.setTotalPages(response.data.totalCount);
    });
  }, []);

  useEffect(() => {
    props.setIsLoading(true);
    getUsers(props.currentPage, props.pageSize).then((response) => {
      props.setUsers(response.data.items);
      props.setIsLoading(false);
    });
  }, []);

  const onPageChanged = (pageNumber: number) => {
    props.setCurrentPage(pageNumber);
    props.setIsLoading(true);
    getUsers(pageNumber, props.pageSize).then((response) => {
      props.setUsers(response.data.items);
      props.setIsLoading(false);
    });
  };
  return (
    <section>
      <Friends users={props.users} totalPages={props.totalPages} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={onPageChanged} isLoading={props.isLoading} />
    </section>
  );
}

const FriendsContainer = connect(mapStateToProps, actionCreators)(FriendsAPIComponent);

export { FriendsContainer };
