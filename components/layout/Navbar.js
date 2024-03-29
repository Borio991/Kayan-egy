import React, { useContext, useState } from 'react'
import { Transition } from '@headlessui/react'
import NavLink from '../ui/NavLink'
import NavLinksMobile from '../ui/NavLinksMobile'
import Link from 'next/link'
import LangContext from '../../utils/store'
import LogoSvg from '../ui/LogoSvg'
import Image from 'next/image'

function Nav() {
  const { en, changeLang } = useContext(LangContext)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="fixed top-0 left-0 z-20 w-full bg-darkColor ">
      <nav className={`mx-auto max-w-7xl ${en ? '' : 'rtl'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-28 items-center justify-between ">
            <div className="flex w-full items-center justify-between ">
              <Link href="/">
                <div className="cursor-pointer overflow-hidden ">
                  {/* <LogoSvg /> */}
                  <Image  src="/images/kayan-logo.png" alt="logo" width={200} height={150} />
                </div>
                
              </Link>
              <div className="flex-1"></div>
              <div className="mx-auto hidden md:block">
                <div className="flex items-baseline space-x-4">
                  <NavLink navName={en ? 'Home' : 'الرئيسية'} link="/" />
                  <NavLink navName={en ? 'About Us' : 'من نحن'} link="/about" />
                  <NavLink
                    navName={en ? 'Services' : 'خدماتنا'}
                    link="/services"
                  />
                  <NavLink
                    navName={en ? 'Projects' : 'مشاريع'}
                    link="/equipments"
                  />
                  <NavLink
                    navName={en ? 'Contact' : 'تواصل معنا'}
                    link="/contact"
                  />
                  <button
                    onClick={changeLang}
                    className="btn  min-w-[50px] bg-redish text-textColorDark hover:bg-white hover:text-redish"
                  >
                    {' '}
                    {en ? 'ع' : 'en'}{' '}
                  </button>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex gap-4 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-150 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {/* mobile menu */}
          <div className="md:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              <NavLinksMobile navName={en ? 'Home' : 'الرئيسية'} link="/" />
              <NavLinksMobile
                navName={en ? 'About Us' : 'من نحن'}
                link="/about"
              />
              <NavLinksMobile
                navName={en ? 'Services' : 'خدماتنا'}
                link="/services"
              />
              <NavLinksMobile
                navName={en ? 'Equipments' : 'معدات'}
                link="/equipments"
              />
              <NavLinksMobile
                navName={en ? 'Contact' : 'تواصل معنا'}
                link="/contact"
              />
              <button
                onClick={changeLang}
                className="btn min-w-[60px] bg-redish text-textColorDark hover:bg-textColorDark hover:text-redish"
              >
                {en ? 'العربية' : 'English'}
              </button>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  )
}

export default Nav
