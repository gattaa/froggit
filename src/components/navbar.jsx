import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import "../pages/index.css"

const navigation = [
  { name: 'these', href: '#' },
  { name: 'don\'t', href: '#' },
  { name: 'bring', href: '#' },
  { name: 'anywhere', href: '#' },
]

export default function Navbar() {
  return (
    <div className="relative outline-none border-b-2 border-gray-100 w-screen" >
      <div className="">
        <div className="relative  pb-4  ">

          <Popover>
            {({ open }) => (
              <>
                <div className="relative pt-4 px-4 sm:px-6 lg:px-8 mx-auto">
                  <nav
                    className="relative flex items-center justify-between sm:h-10 lg:justify-start mx-auto"
                    aria-label="Global"
                  >
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="#">
                          <span className="sr-only">Workflow</span>
                          <img
                            className="h-8 w-auto sm:h-10"
                            src="/froggit.png"
                            alt="icon"
                          />
                        </a>
                        <div className="-mr-2 flex items-center md:hidden">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex outline-none items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open main menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 mx-auto justify-center">
                      {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="thatfont text-gray-700 hover:text-gray-900 cursor-not-allowed">
                          {item.name}
                        </a>
                      ))}
                      {/*<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Log in
                      </a>*/}
                    </div>
                  </nav>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right outline-none md:hidden"
                  >
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                          <img
                            className="h-8 w-auto"
                            src="/froggit.png"
                            alt="icon"
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close main menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      {/*<a
                        href="#"
                        className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                      >
                        Log in
                      </a>*/}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

        
        </div>
      </div>
    </div>
  )
}