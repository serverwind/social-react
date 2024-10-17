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

function mapStateToProps(state) {
  return {
    users: state.users.users,
    currentPage: state.users.currentPage,
    pageSize: state.users.pageSize,
    totalPages: state.users.totalPages,
    isLoading: state.users.isLoading,
  };
}

function FriendsAPIComponent(props) {
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

  const onPageChanged = (pageNumber) => {
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
