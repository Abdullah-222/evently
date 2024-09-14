import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export default function Component() {
  return (
    <header className=" z-50 w-full bg-white/20 backdrop-blur-lg shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 " prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Evently</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-6 text-base font-medium md:flex ">
          <Link href="/explore" className=" text-purple-500 hover:scale-105 transition-all duration-300 " prefetch={false}>
            Explore
          </Link>
          <Link href="/dashboard" className="text-purple-500 hover:scale-105 transition-all duration-300" prefetch={false}>
            Dashboard
          </Link>
          <Link href="/form" className="text-purple-500 hover:scale-105 transition-all duration-300" prefetch={false}>
            Create 
          </Link>
  
        </nav>

        {/* Mobile Menu and Login Button */}
        <div className="flex items-center ">
          <Button variant="outline" className="hidden md:inline-flex rounded-2xl text-lg bg-gradient-to-r from-[#099ef1] via-[#6863f8] to-[#ff891f] text-white border-none">
            <Link href='/auth/sign-up'>Login</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="md:hidden bg-white/20 backdrop-blur-lg text-white">
              <div className="flex flex-col items-start gap-4 p-4">
                <Link href="/explore" className="text-lg font-medium transition-colors hover:text-primary" prefetch={false}>
                  Explore
                </Link>
                <Link href="/dashboard" className="text-lg font-medium transition-colors hover:text-primary" prefetch={false}>
                  Dashboard
                </Link>
                <Link href="/form" className="text-lg font-medium transition-colors hover:text-primary" prefetch={false}>
                  Create Event
                </Link>
                
                <Button variant="outline" className="w-full">
                  <Link href="/auth/sign-up">Login</Link>
                  
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="url(#gradient)" // Use the gradient for the stroke color
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#099ef1" />
          <stop offset="50%" stopColor="#6863f8" />
          <stop offset="100%" stopColor="#ff891f" />
        </linearGradient>
      </defs>
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
