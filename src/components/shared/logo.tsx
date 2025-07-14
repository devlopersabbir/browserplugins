export default function Logo() {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/25">
          <span className="text-white font-black text-xl">BP</span>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
      </div>
      <div>
        <h1 className="text-2xl font-black bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          BrowserPlugins
        </h1>
        <p className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
          Premium Store
        </p>
      </div>
    </div>
  );
}
