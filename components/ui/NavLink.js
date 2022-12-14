import React from 'react'
import Link from 'next/link'

export default function NavLink({ navName, link }) {
  return (
    <Link href={link}>
      <a className="rounded-md px-3 py-2 text-sm font-medium text-textColorDark  hover:text-redish">
        {navName}
      </a>
    </Link>
  )
}
