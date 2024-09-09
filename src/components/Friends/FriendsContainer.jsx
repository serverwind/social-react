import { Friends } from "./Friends";
import { StoreContext } from "../../StoreContext";

function FriendsContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        return <Friends friends={state.users.friends} />;
      }}
    </StoreContext.Consumer>
  );
}

export { FriendsContainer };
