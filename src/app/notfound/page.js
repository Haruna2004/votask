import Link from "next/link";
import Image from "next/image";
import { home_icon } from "../../../public/asset";

export default function Notfound() {
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center">
      <div className="flex-1 flex items-center justify-center">
        <h2 className="text-[#7000FF] text-xl font-semibold text-center">
          Your not authorized in this page. Only Verified officials are allowed
          to Create/Edit Polls
        </h2>
      </div>
      <div className="">
        <Link
          href="/home"
          className="flex flex-col justify-center items-center"
        >
          <Image src={home_icon} alt="home" className="h-9 w-9" />
          <p className="text-[#8e59d4] text-center text-xl">Back to Home</p>
        </Link>
      </div>
    </div>
  );
}
