import React, { useCallback, useState, useContext } from 'react'
import axios from 'axios'
import Title from '../ui/Title'
import ContactItem from '../ui/ContactItem'
import LanguageContext from '../../utils/store'
import Link from 'next/link'

export default function Contact() {
  const { en } = useContext(LanguageContext)

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null,
    },
  })

  const [inputs, setInputs] = useState({
    companyName: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleOnChange = useCallback((e) => {
    e.persist()
    setInputs((inputs) => ({
      ...inputs,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: {
        error: false,
        msg: null,
      },
    })
  }, [])

  const handleServerResponse = useCallback((ok, message) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg: null,
        },
      })
      setInputs({
        companyName: '',
        email: '',
        phone: '',
        message: '',
      })
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: {
          error: true,
          msg: 'Something went wrong. Please try again later.',
        },
      })
    }
  }, [])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
      axios({
        method: 'POST',
        url: 'https://formspree.io/f/mbjbqlgj',
        data: inputs,
      }).then((_response) =>
        handleServerResponse(true, 'Thank You , Message sent successfully')
      )
    },
    [inputs, handleServerResponse]
  )

  return (
    <div className="bg-dark3 px-4 py-2 sm:px-6 md:py-8 lg:px-12">
      <div className={`section-height mx-auto max-w-7xl ${en ? '' : 'rtl'}`}>
        <Title>{en ? 'Contact Us' : 'تواصل معنا'}</Title>
        <div className="mt-12 flex flex-col gap-12  md:flex-row lg:mt-16">
          <div className="grid  w-1/2 gap-2 lg:grid-cols-2 lg:gap-12">
            <ContactItem
              heading={en ? 'Call Us' : 'اتصل بنا'}
              contactMethod={en ? 'Call Us' : 'هاتف'}
              contactValue={en ? '01067076076' : '01067076076'}
            />
            <ContactItem
              heading={en ? 'Mail Us' : 'ارسل لنا'}
              contactMethod={en ? 'Email' : 'البريد الالكتروني'}
              contactValue="kayan.egy.developments@gmail.com"
            />
            <ContactItem
              heading={en ? 'Our Location' : 'موقعنا'}
              contactMethod={en ? 'Address' : 'العنوان'}
              contactValue={
                en
                  ? 'Al-Narges 7 - Naguib Al-Rehani street - villa 29'
                  : 'النرجس 7 - شارع نجيب الريحاني - فيلا 29'
              }
            />
            <ContactItem
              heading={en ? 'Visit our Website' : 'زور موقعنا الالكتروني'}
              contactMethod={en ? 'Website' : 'الموقع الالكتروني'}
              contactValue="www.kayan-egy.com"
            />

            <div className="flex flex-col"> </div>
          </div>

          <form
            className="flex w-full  flex-col gap-4 md:w-1/2"
            onSubmit={handleSubmit}
          >
            <div className="text-center">
              <h3 className="text-lg font-bold leading-7 md:text-xl">
                {en ? 'Get in Touch' : 'تواصل معنا'}
              </h3>
            </div>{' '}
            {status.info.error && (
              <div
                className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
                role="alert"
              >
                {' '}
                <strong className="font-bold">Error</strong>{' '}
                <span className="block sm:inline">{status.info.msg}</span>{' '}
              </div>
            )}{' '}
            {status.submitted ? (
              <div
                className="relative rounded px-4 py-3 text-xl font-bold text-white"
                role="alert"
              >
                {' '}
                Your message has been sent successfully. We will Contact you
                soon.{' '}
              </div>
            ) : (
              <>
                {' '}
                <input
                  type="text"
                  id="companyName"
                  name="Company Name"
                  required
                  maxLength={128}
                  placeholder={en ? 'Company Name' : 'اسم الشركة'}
                  className="rounded-3xl border-2 border-white bg-black px-8 py-2 text-white outline-none"
                  onChange={handleOnChange}
                  value={inputs.companyName}
                />{' '}
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  maxLength={200}
                  placeholder={en ? 'Your Email' : 'البريد الالكتروني'}
                  className="rounded-3xl border-2 border-white bg-black px-8 py-2 text-white outline-none"
                  onChange={handleOnChange}
                  value={inputs.email}
                />{' '}
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  maxLength={128}
                  placeholder={en ? 'Phone' : 'رقم الهاتف'}
                  className="rounded-3xl border-2 border-white bg-black px-8 py-2 text-white outline-none"
                  onChange={handleOnChange}
                  value={inputs.phone}
                />{' '}
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  required
                  maxLength={1048576}
                  placeholder={en ? 'Your Message' : 'الرسالة'}
                  className="min-h-[16em] rounded-3xl border-2 border-white bg-black px-8 py-6 text-white outline-none"
                  onChange={handleOnChange}
                  value={inputs.message}
                ></textarea>{' '}
                <div className="mt-10 text-center">
                  {' '}
                  <button
                    type="submit"
                    className="rounded-3xl bg-black px-8 py-2 text-white"
                  >
                    {' '}
                    {!status.submitting
                      ? !status.submitted
                        ? `${en ? 'Submit' : 'ارسال'}`
                        : `${en ? 'Submitted' : 'تم الارسال'}`
                      : `${en ? 'Submitting' : 'جاري الارسال'}`}{' '}
                  </button>{' '}
                </div>{' '}
              </>
            )}{' '}
          </form>
          <Link href="https://api.whatsapp.com/send?phone=2001014024745?text=please%20send%20me%20more%20details">
            <a aria-label="Chat on WhatsApp" className="whatsapp">
              {' '}
              <img
                alt="Chat on WhatsApp"
                src="/images/WhatsAppButtonGreenSmall.png"
              />{' '}
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
