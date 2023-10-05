import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white/50 flex justify-between px-8 sm:px-16 py-5 flex-row gap-5">
      <HeaderLink href="/">Amalie Rege</HeaderLink>
      <div className="flex gap-5">
        <HeaderLink href="/cv">Resume</HeaderLink>
      </div>
    </header>
  );
}

function HeaderLink({ href, children }) {
  return (
    <Link
      className="font-bold hover:underline underline-offset-2 outline-offset-4 text-neutral-black"
      href={href}
    >
      {children}
    </Link>
  );
}
