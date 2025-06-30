import React, { Suspense } from "react";
import AuthLoading from "@/app/loading";
import ReanderPage from "./_components/ReanderPage";

type Props = {};

const Page = (props: Props) => {
  return (
    <main className="w-full h-full pt-6">
      <Suspense fallback={<AuthLoading />}>
        <ReanderPage />
      </Suspense>
    </main>
  );
};
export default Page;
