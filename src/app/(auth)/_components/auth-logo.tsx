import Link from "next/link";

export default function AuthLogo() {
  return (
    <div className="text-center mb-8">
      <Link href="/" className="inline-flex items-center space-x-2 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">BP</span>
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          BrowserPlugins
        </span>
      </Link>
    </div>
  );
}
