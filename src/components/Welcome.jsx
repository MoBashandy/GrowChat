import { React, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoS from "../assets/Grow.svg";

const navigation = [
  { name: "Download", href: "#" },
  { name: "Cultivate", href: "#" },
  { name: "Rain", href: "#" },
  { name: "Roots", href: "#" },
];

const tiger = {
  backgroundColor: "#1c203e",
};

const Welcome = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="my-2 mx-10 absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">GrowChat</span>
              <div
                className="-mx-3 text-4xl block rounded-full px-1 py-2 font-poppins outline-none leading-4 font-bold bg-white   text-purple-500 duration-1000
              transition-all hover:outline-purple-500 hover:outline-3 hover:text-purple-700"
              >
                G
              </div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div
            className="hidden lg:flex lg:gap-x-8 rounded-full
          relative px-3 py-2 transition bg-white leading-7
          shadow-inner shadow-black 
        text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20
          "
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold 
              leading-4 text-gray-900 transition-all duration-1000
              hover:text-base hover:text-purple-500"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div
            className="hidden lg:flex lg:justify-end p-1 rounded-full
          bg-white shadow-inner shadow-black"
          >
            <a
              href="../../log.html"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">GrowChat</span>
                <img className="h-8 w-auto" src={logoS} alt="" />
              </a>
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
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="../../log.html"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div
        className={`Tiger overflow-hidden relative isolate px-6 pt-14 lg:px-8`}
        style={{ backgroundColor: "#1c203e" }}
      >
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4f46e5] to-[#ff80b5] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-40  lg:py-44">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            {/* below */}
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl ">
              Seed the conversation watch friendships
              <span className="text-purple-500  transition-all duration-700 hover:text-purple-700">
                {" "}
                GROW
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              where every chat is a work of art, and hanging out is an everyday
              masterpiece.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="../../log.html"
                className="rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-md transition-all duration-700 hover:shadow-black hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Free Download
              </a>
              <a
                href="../../Chat.html"
                className="rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-700 hover:shadow-black hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Try It Now !
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#4f46e5] to-[#ff80b5] opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
