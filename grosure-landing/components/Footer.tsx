import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface">
                <Image src="/images/olive-icon.png" alt="grosure logo" width={40} height={40} className="rounded-xl" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-normal text-primary">grosure</span>
                <span className="text-xs text-secondary font-light tracking-wide">kitchen co pilot</span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-secondary leading-relaxed">
              Plan meals, track your pantry, and shop smarter with Olive, your calm and intelligent AI kitchen agent, by your side.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            <div className="space-y-3">
              <h3 className="text-xs font-medium tracking-widest text-primary uppercase">Product</h3>
              <ul className="space-y-2 text-sm text-secondary">
                <li>
                  <Link href="/#features" className="transition-colors hover:text-accent">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="transition-colors hover:text-accent">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="/#download" className="transition-colors hover:text-accent">
                    Download
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="transition-colors hover:text-accent">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-medium tracking-widest text-primary uppercase">Company</h3>
              <ul className="space-y-2 text-sm text-secondary">
                <li>
                  <a href="#" className="transition-colors hover:text-accent">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-accent">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-accent">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-medium tracking-widest text-primary uppercase">Legal</h3>
              <ul className="space-y-2 text-sm text-secondary">
                <li>
                  <Link href="/privacy" className="transition-colors hover:text-accent">
                    Privacy
                  </Link>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-accent">
                    Terms
                  </a>
                </li>
                <li>
                  <Link href="/delete-account" className="transition-colors hover:text-accent">
                    Account deletion
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-sm text-secondary">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} grosure. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="transition-colors hover:text-accent">
                Twitter
              </a>
              <a href="#" className="transition-colors hover:text-accent">
                Instagram
              </a>
              <a href="#" className="transition-colors hover:text-accent">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
