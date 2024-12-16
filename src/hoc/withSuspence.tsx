import { Suspense } from "react";
import Loader from "../components/Loader/Loader";

export default function withSuspence(Component) {
  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
}
