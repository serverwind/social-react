import s from "./Buttons.module.css";

export default function Buttons(props) {
  return (
    <>
      <button onClick={props.onSetLightTheme} className={props.theme === "light" ? s.disabled + " bg-gray-200 py-2 px-4 text-sm" : "bg-gray-200 text-sm py-2 px-4"}>
        Light
      </button>
      <button onClick={props.onSetDarkTheme} className={props.theme === "dark" ? s.disabled + " bg-gray-800 text-white py-2 px-4 text-sm" : "bg-gray-800 text-white text-sm py-2 px-4"}>
        Dark
      </button>
    </>
  );
}
