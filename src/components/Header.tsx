import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Icon from "./../assets/icon.png";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only text-white">JordyMagie</span>
            <img className="h-12 w-auto" src={Icon} alt="" />
          </Link>
        </div>
        <div className="lg:flex-grow lg:flex lg:justify-center space-x-40 sm:hidden">
          <Link
            to="/"
            className="text-lg font-semibold leading-6 text-white opacity-55 hover:opacity-100 transition-opacity duration-300"
          >
            Home
          </Link>
          <Link
            to="/listServices"
            className="text-lg font-semibold leading-6 text-white opacity-55 hover:opacity-100 transition-opacity duration-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-lg font-semibold leading-6 text-white opacity-55 hover:opacity-100 transition-opacity duration-300"
          >
            Contact
          </Link>
        </div>
        <div className="flex lg:hidden ">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white opacity-55 hover:opacity-100 transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only text-white">JordyMagie</span>
                <img className="h-8 w-auto" src={Icon} alt="" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/listServices"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    to="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </nav>
    </header>
  );
}
export default Header;
