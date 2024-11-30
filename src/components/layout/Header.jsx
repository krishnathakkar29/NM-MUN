import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const MobileNavLinks = () => (
    <div className="flex flex-col space-y-4 p-4">
      <SheetClose asChild>
        <Link
          to="/"
          className="text-white uppercase text-sm block py-2 hover:bg-white/20 rounded transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
      </SheetClose>
      <SheetClose asChild>
        <Link
          to="/about"
          className="text-white uppercase text-sm block py-2 hover:bg-white/20 rounded transition-colors"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
      </SheetClose>
      <SheetClose asChild>
        <Link
          to="/core"
          className="text-white uppercase text-sm block py-2 hover:bg-white/20 rounded transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Core
        </Link>
      </SheetClose>
      <SheetClose asChild>
        <Link
          to="/events"
          className="text-white uppercase text-sm block py-2 hover:bg-white/20 rounded transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Events
        </Link>
      </SheetClose>
      <SheetClose asChild>
        <Link
          to="/contact"
          className="text-white uppercase text-sm block py-2 hover:bg-white/20 rounded transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </SheetClose>
      {/* <SheetClose asChild>
        <a
          href="https://bento.me/nmcmunclub?fbclid=PAZXh0bgNhZW0CMTEAAaZMiuvEc1CiKzGJs_xLYyn13snPjhcvz72NzjcjptQLGf9wwMvvdmf_sY8_aem_q6atbXB59-L_6dyV_N2NGQ"
          className="block"
        >
          <Button className="w-full uppercase">Register Now!</Button>
        </a>
      </SheetClose> */}
    </div>
  );
  return (
    <header className="fixed w-full top-0 left-0 z-[999] bg-transparent backdrop-blur-2xl shadow-2xl">
      <div className="container px-8">
        <div className="flex items-center justify-between py-2">
          <img src="/nmcmun-logo.png" className="w-16" alt="" />
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-white uppercase text-sm">
              Home
            </Link>
            <Link to="/about" className="text-white uppercase text-sm">
              About
            </Link>
            <Link to="/core" className="text-white uppercase text-sm">
              Core
            </Link>
            <Link to="/events" className="text-white uppercase text-sm">
              Events
            </Link>
            <Link to="/contact" className="text-white uppercase text-sm">
              Contact
            </Link>
          </nav>
          <a href="https://bento.me/nmcmunclub?fbclid=PAZXh0bgNhZW0CMTEAAaZMiuvEc1CiKzGJs_xLYyn13snPjhcvz72NzjcjptQLGf9wwMvvdmf_sY8_aem_q6atbXB59-L_6dyV_N2NGQ">
            <button className=" p-2 md:px-6 md:py-2 text-white element-button rounded-full text-md font-bold uppercase">
              Register Now!
            </button>
          </a>

          {/* <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="outline"
                size="icon"
                className="text-white bg-transparent border-none"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/80 backdrop-blur-xl">
              <SheetHeader>
                <SheetTitle className="text-white">
                  <img
                    src="/nmcmun-logo.png"
                    className="w-16 mx-auto mb-4"
                    alt="NMCMUN Logo"
                  />
                </SheetTitle>
              </SheetHeader>
              <MobileNavLinks />
            </SheetContent>
          </Sheet> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
