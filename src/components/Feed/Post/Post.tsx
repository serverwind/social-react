import PlaceholderImage from "../../../assets/img/placeholder.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Post(props) {
  return (
    <div className="mb-8 flex flex-col justify-center" key={props.id}>
      <div className="flex justify-center h-64 w-full">
        <LazyLoadImage className="rounded object-cover w-full h-full" src={props.src} placeholderSrc={PlaceholderImage} alt={props.desc} />
      </div>
      <div className="italic grid grid-cols-[1fr_auto] gap-1 text-sm py-2">
        <span>{props.desc}</span>
        <span className="mgc_heart_fill text-end">{props.likes}</span>
      </div>
      <div className="text-sm text-end">{props.date}</div>
    </div>
  );
}
