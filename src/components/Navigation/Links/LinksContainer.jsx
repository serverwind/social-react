import { Links } from "./Links";
import { StoreContext } from "../../../StoreContext";

function LinksContainer() {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();
          return  <Links links={state.links} />
        }
      }
    </StoreContext.Consumer>
  )
}

export { LinksContainer };
