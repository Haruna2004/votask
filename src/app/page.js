import Image from "next/image";
import { splash, splashText } from "../../public/asset";
import Link from "next/link";
export default function page() {
  return (
    <div className="h-full flex items-center gap-10 justify-center flex-col">
      <div className="flex items-center mt-20 flex-col justify-center">
        <Image
          src={splash}
          alt="splash"
          className="cropped-bottom"
          width={250}
          height={250}
        />
        <p className="mt-7 text-xl text-[rgb(128,100,162)]">
          Improving {"Nigeria's"} voting system
        </p>
        {/* <Image src={splashText} alt="splash" /> */}
      </div>
      <Link
        href="/home"
        className="bg-[#7000FF] text-white mt-12 px-6 py-2
      rounded-md"
      >
        Continue
      </Link>
      <div className="text-center font-semibold px-2">
        <p>Project of Be-mint Team Golf powered by </p>
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
