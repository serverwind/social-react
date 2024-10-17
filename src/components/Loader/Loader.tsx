import loader from "../../assets/img/is-loading.svg";

function Loader() {
  return (
    <div className="bg-gray-800 p-4">
      <img src={loader} alt="Loader image" />
    </div>
  );
}

export { Loader };
