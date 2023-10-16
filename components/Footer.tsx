import Link from "next/link";

export default function Footer() {
  return (
    <footer className="font-sans font-bold center mt-5 flex justify-center space-x-1 bg-[#E7E8EF] p-4 text-xs">
      <img  src="/logowhitesmall.png" alt="Logo" width={5} height={5} className=" translate-y-[-2px] mr-[8px] h-5 w-5" /> {/* Replace "/logowhitesmall.png" with the correct path to your image */}
      <p>Designed By</p>
      <span className="text-zinc-500">Deo Siniza</span>
      <span>|</span>
      <a href="https://astrumstellar.com" className="font-sans font-medium text-orange-600">
        Github Code
      </a>
    </footer>
  );
}
