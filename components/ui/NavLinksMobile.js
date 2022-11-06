import React from 'react'
import Link from 'next/link'

export default function NavLink({ navName, link }) {
  return (
    <Link href={link}>
      <a
        className="block rounded-md px-3 py-2
       text-base font-medium text-textColorDark hover:bg-slate-900 "
      >
        {navName}
      </a>
    </Link>
  )
}
