import Logo from "./logo";
import RightSideHeader from "./right-side-header-item";

export default function Header() {
  return (
    <header className="sticky z-50 border-b border-border bg-background/70 backdrop-blur-xl top-0">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          <RightSideHeader />
        </div>
      </div>
    </header>
  );
}
