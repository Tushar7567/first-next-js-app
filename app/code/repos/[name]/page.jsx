import Link from "next/link";
import { Suspense } from "react";
import Repo from "@/app/components/Repo";

const RepoPage = ({ params: { name } }) => {
  return (
    <div>
      {/* {name} */}
      <button>
        <Link href="/code/repos">Go To Back</Link>
      </button>
      <Suspense fallback={<div> Loading repo... </div>} >
        <Repo name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
