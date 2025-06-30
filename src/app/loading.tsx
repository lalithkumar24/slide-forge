"use client";
import { Player } from "@lottiefiles/react-lottie-player";
const AuthLoading = () => {
  const AuthLoadingAnimation = "/AuthLoadingAnimation.json";
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Player
        autoplay
        loop
        src={AuthLoadingAnimation}
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
};
export default AuthLoading;
