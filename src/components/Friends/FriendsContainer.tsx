import { useEffect } from "react";
import { connect } from "react-redux";
import { setUsersAC, setCurrentPageAC, setTotalPagesAC, setIsLoadingAC } from "../../data/usersReducer";
import Friends from "./Friends";
import { getUsers } from "../../api/api";

const actionCreators = {
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
    async function ProcessUsersData() {
      try {
        const response = await getUsers(props.currentPage, props.pageSize);
        props.setUsers(response.data.items);
        props.setTotalPages(response.data.totalCount);
      } catch (error) {
        console.log(error);
      }
    }
    ProcessUsersData();
  }, []);

  useEffect(() => {
    async function ProcessUsersData() {
      try {
        const response = await getUsers(props.currentPage, props.pageSize);
        props.setUsers(response.data.items);
      } catch (error) {
        console.log(error);
      } finally {
        props.setIsLoading(false);
      }
    }
    ProcessUsersData();
  }, []);

  async function onPageChanged(pageNumber: number) {
    props.setIsLoading(true);
    try {
      const response = await getUsers(pageNumber, props.pageSize);
      props.setCurrentPage(pageNumber);
      props.setUsers(response.data.items);
    } catch (error) {
      console.log(error);
    } finally {
      props.setIsLoading(false);
    }
  }

  return (
    <section>
      <Friends users={props.users} totalPages={props.totalPages} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={onPageChanged} isLoading={props.isLoading} />
    </section>
  );
}

export const FriendsContainer = connect(mapStateToProps, actionCreators)(FriendsAPIComponent);
