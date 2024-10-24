import { LinksContainer } from "./Links/LinksContainer";

export default function Navigation(props) {
  return (
    <nav className={ `${props.theme.bg} ${props.theme.text} sm:p-4 sm:relative` }>
      <LinksContainer />
    </nav>
  );
}
