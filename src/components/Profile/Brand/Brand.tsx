type BrandProps = {
  name: string;
};

export default function Brand(props) {
  return (
    <div className="h-48 bg-black flex justify-center items-center">
      <h1 className="text-2xl text-white uppercase border-b-2 border-t-2 border-white">{props.name}</h1>
    </div>
  );
}
