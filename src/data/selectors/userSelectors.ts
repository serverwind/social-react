export const getUsers = (state) => {
  return state.users.users;
}

export const getCurrentPage = (state) => {
  return state.users.currentPage;
}

export const getPageSize = (state) => {
  return state.users.pageSize;
}

export const getTotalPages = (state) => {
  return state.users.totalPages;
}

export const getIsLoading = (state) => {
  return state.users.isLoading;
}

export const getTheme = (state) => {
  return state.settings.theme;
}
