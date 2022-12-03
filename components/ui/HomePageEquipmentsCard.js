import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import LangContext from '../../utils/store'

export default function HomePageEquipmentsCard({ title, src, subtitle, url }) {
  const { en } = useContext(LangContext)
  return (
    <div className="card glass max-h-[560px] max-w-[80]">
      <figure className="h-[65%] max-h-[65%]">
        <Image
          src={src}
          alt={title}
          className="h-full w-full object-cover"
          height="400px"
          width="440px"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{subtitle}</p>
        <div className="card-actions justify-end">
          <Link href={url ? '/contact' : '/equipments'}>
            <button className="btn border-0 bg-redish text-white hover:bg-red-500 hover:text-black">
              {en
                ? url
                  ? 'contact us'
                  : 'view more'
                : url
                ? 'تواصل معنا'
                : 'عرض المزيد'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
