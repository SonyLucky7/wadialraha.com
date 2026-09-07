import Link from "next/link";
import { House, ChatText } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#F5F6F8] px-4 py-20 text-center">
      <div className="relative">
        <h1 className="text-[8rem] md:text-[12rem] font-extrabold text-[#C9A227]/20 leading-none tracking-tighter">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220]">
            Page Not Found
          </h2>
        </div>
      </div>
      <p className="mt-6 text-lg text-[#6B7280] max-w-md mx-auto">
        The page you're looking for may have moved or no longer exists.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 bg-[#C9A227] text-white px-8 py-4 rounded font-semibold hover:bg-[#b08d22] transition-colors min-w-[200px] justify-center"
        >
          <House weight="fill" className="w-5 h-5" />
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="flex items-center gap-2 bg-[#0B1220] text-white px-8 py-4 rounded font-semibold hover:bg-[#151a24] transition-colors min-w-[200px] justify-center"
        >
          <ChatText weight="fill" className="w-5 h-5" />
          Contact Us
        </Link>
      </div>
    </div>
  );
}
