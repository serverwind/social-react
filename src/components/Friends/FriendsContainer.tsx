import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Friends from "./Friends";
import { getUsersTC, changePageTC } from "../../data/usersReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import loadTheme from "../../utils/loadTheme";
import { getUsers, getCurrentPage, getPageSize, getIsLoading, getTotalPages, getTheme } from "../../data/selectors/userSelectors";

const actionCreators = {
  getUsers: getUsersTC,
  changePage: changePageTC,
};

function mapStateToProps(state : any) {
  return {
    users: getUsers(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    totalPages: getTotalPages(state),
    isLoading: getIsLoading(state),
    theme: getTheme(state),
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
