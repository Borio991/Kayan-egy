import React from 'react'

export default function ContactItem({
  heading,
  contactMethod,
  contactValue,
  contactValue2,
  contactValue3,
}) {
  return (
    <div className="mb-8 flex flex-col">
      <h3 className="text-lg font-bold leading-7 md:text-xl">{heading}</h3>
      <span className="-mt-1 block min-h-[24px] max-w-full opacity-60">
        {contactMethod}
      </span>
      <span className="mt-1 block max-w-xs leading-8 opacity-90 md:text-xl">
        {contactValue}
      </span>{' '}
      {contactValue2 && (
        <span className="   leading-8 opacity-90 md:text-xl">
          {contactValue2}
        </span>
      )}
      {contactValue3 && (
        <span className="   leading-8 opacity-90 md:text-xl">
          {contactValue3}
        </span>
      )}
    </div>
  )
}
