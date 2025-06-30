"use client";
import { Player } from "@lottiefiles/react-lottie-player";
const GolbaleNotFound = () => {
  const PageNotFoundAnimation = "/pagenotfound.json";
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Player
        autoplay
        loop
        src={PageNotFoundAnimation}
        style={{ height: "300px", width: "300px" }}
      />
      <p className="text-base text-xl font-normal text-primary">
        Go Back to Dashboard nothing here!
      </p>
    </div>
  );
};
export default GolbaleNotFound;
