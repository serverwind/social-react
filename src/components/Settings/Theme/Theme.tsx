import Buttons from "./Buttons/Buttons";

export default function Theme(props) {
  return (
    <div className="flex gap-2 items-center">
      <span>Theme:</span>
      <Buttons onSetDarkTheme={props.onSetDarkTheme} onSetLightTheme={props.onSetLightTheme} theme={props.theme} />
    </div>
  );
}
