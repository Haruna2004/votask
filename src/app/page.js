import Image from "next/image";
import { splash, splashText } from "../../public/asset";
import Link from "next/link";
export default function page() {
  return (
    <div className="h-full grid place-items-center gap-10 pt-3">
      <div className="flex items-center flex-col justify-center ">
        <Image src={splash} alt="splash" />
        <Image src={splashText} alt="splash" />
      </div>
      <Link
        href="/home"
        className="bg-[#7000FF] text-white px-6 py-2
      rounded-md"
      >
        Continue
      </Link>
      <div className="text-center font-semibold px-2">
        <p>Project of Be-mint Team Golf Sponsored by </p>
        <Link
          className="text-blue-700"
          target="_blank"
          href="https://empoweringafricans.org"
        >
          Empowering Africans Through Education Initiative
        </Link>
      </div>
    </div>
  );
}
