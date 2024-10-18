import loader from "../../assets/img/is-loading.svg";

export default function Loader() {
  return (
    <div className="bg-gray-800 p-4">
      <img src={loader} alt="Loader image" />
    </div>
  );
}
