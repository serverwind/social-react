export default function Post(props) {
  return (
    <div className="mb-8 flex flex-col justify-center lg:max-w-lg">
      <div className="flex justify-center">
        <img className="rounded" src={props.src} />
      </div>
      <div className="italic grid grid-cols-[1fr_auto] gap-1 text-sm py-2">
        <span>{props.desc}</span>
        <span className="mgc_heart_fill text-end">{props.likes}</span>
      </div>
      <div className="text-sm text-end">{props.date}</div>
    </div>
  );
}
