"use client";

import { useEffect, useState } from "react";
import { CallCta } from "@/components/CallCta";

const NAV_LINKS = [
  { label: "Services", href: "#pillars" },
  { label: "Benefits", href: "#benefits" },
  { label: "Vaccination", href: "#vaccination-tool" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 flex flex-row items-center justify-between gap-4 px-5 py-4 transition-colors duration-300 sm:px-8 sm:py-5 ${
        scrolled ? "border-b border-pink-line bg-white/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <a href="#top" className="flex items-center gap-1 text-black select-none">
        <span className="text-[21px] font-medium tracking-tight sm:text-[26px]">Olavu Clinic</span>
        <span aria-hidden="true" className="mb-1 text-[25px] font-medium leading-none tracking-[-0.02em] sm:text-[30px]">
          &#10033;
        </span>
      </a>

      <nav className="hidden items-center gap-2 text-[23px] text-black md:flex">
        {NAV_LINKS.map((link, i) => (
          <span key={link.href} className="flex items-center gap-2">
            <a href={link.href} className="transition-opacity hover:opacity-60">
              {link.label}
            </a>
            {i < NAV_LINKS.length - 1 && (
              <span aria-hidden="true" className="opacity-40">
                ,&nbsp;
              </span>
            )}
          </span>
        ))}
      </nav>

      <div className="hidden md:block">
        <CallCta className="text-[23px] text-black underline underline-offset-2 transition-opacity hover:opacity-60">
          Get in touch
        </CallCta>
      </div>

      <button
        type="button"
        onClick={() => setIsMobileMenuOpen((v) => !v)}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
        className="relative z-[10] flex h-6 w-6 flex-col items-center justify-center gap-[6px] md:hidden"
      >
        <span
          className={`h-[2px] w-6 bg-black transition-all duration-300 ${
            isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span className={`h-[2px] w-6 bg-black transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
        <span
          className={`h-[2px] w-6 bg-black transition-all duration-300 ${
            isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        />
      </button>

      <div
        className={`fixed inset-0 z-[9] bg-white/95 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8 text-2xl text-black">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <CallCta className="underline underline-offset-2" onClickCapture={closeMenu}>
            Get in touch
          </CallCta>
        </nav>
      </div>
    </header>
  );
}
