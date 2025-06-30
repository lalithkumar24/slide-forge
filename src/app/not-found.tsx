"use client";
import { Player } from "@lottiefiles/react-lottie-player";

const GolbaleNotFound = () => {
  const PageNotFoundAnimation = "/pagenotfound.json";

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Player
          autoplay
          loop
          src={PageNotFoundAnimation}
          style={{ height: "300px", width: "300px" }}
        />
        <p className="mt-4 text-xl font-normal text-primary text-center">
          Go Back to Dashboard, nothing here!
        </p>
      </div>
    </div>
  );
};

export default GolbaleNotFound;
