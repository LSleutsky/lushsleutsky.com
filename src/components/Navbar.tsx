import { useState } from "react";
import { Link, useLocation } from "react-router";

interface NavLinkProps {
  to: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Experience", to: "/work" },
  { label: "How I Work", to: "/how-i-work" }
];

const NavLink = ({ to, label, active, onClick }: NavLinkProps) => {
  return (
    <Link
      className={`block rounded-lg px-4 py-3 text-sm transition-colors hover:text-white sm:inline sm:rounded-none sm:px-0 sm:py-0 sm:hover:bg-transparent ${
        active ? "text-white" : "text-gray-500"
      } ${!active ? "hover:bg-dark-800 sm:hover:bg-transparent" : ""}`}
      to={to}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="bg-dark-950/80 fixed top-0 right-0 left-0 z-50 border-b border-indigo-500/20 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          className="hover:text-accent-400 text-sm font-bold tracking-wider text-white transition-colors"
          to="/"
        >
          LS<span className="text-accent-400">_</span>
        </Link>
        {/* Desktop links */}
        <div className="hidden gap-8 sm:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} active={pathname === link.to} label={link.label} to={link.to} />
          ))}
        </div>
        {/* Hamburger toggle */}
        <button
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 sm:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`h-0.5 w-6 bg-gray-400 transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-gray-400 transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-gray-400 transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>
      {/* Mobile drawer */}
      <div
        className={`bg-dark-950/95 overflow-hidden border-t border-indigo-500/20 backdrop-blur-md transition-all duration-300 sm:hidden ${
          open ? "max-h-72" : "max-h-0 border-t-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              active={pathname === link.to}
              label={link.label}
              to={link.to}
              onClick={() => setOpen(false)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
