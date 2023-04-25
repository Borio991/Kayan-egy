import React, { useContext } from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'
import Contact from '../HomePage/Contact'
import LanguageContext from '../../utils/store'

export default function Page({ children, title, description }) {
  const { en } = useContext(LanguageContext)
  return (
    <>
      <Head>
        {en ? (
          <title>
            {title ? `${title} | Kayan Developments` : 'Kayan Developments'}
          </title>
        ) : (
          <title>
            {title ? `${title} | كيان للتطوير العقاري` : 'كيان للتطوير العقاري'}
          </title>
        )}
        <meta
          name="keywords"
          content={
            en
              ? 'kayan-egygroup,Properties,5th settlement,constructions,supply construction materials,kayan developments,finishing works'
              : 'بيع عقارات و التجمع الخامس , بيت الوطن , قطعه , حي النرجس , حي الاندلس , اعمال التشطيبات , توريد مواد البناء , تراخيص المباني'
          }
        ></meta>
        <meta
          name="description"
          content={
            description || en
              ? 'Kayan Developments base in 5th settlement - Constructions - supply of construction materials - finishing works - construction permits'
              : 'شركة كيان للتطوير العقاري بالتجمع الخامس - مقاولات متكاملة - توريد مواد بناء - اعمال التشطيبات - تراخيص البناء'
          }
        ></meta>
        <meta
          property="description"
          content={
            en
              ? 'Properties,5th settlement,constructions,supply construction materials,kayan developments,finishing works'
              : 'بيع عقارات و التجمع الخامس , بيت الوطن , قطعه , حي النرجس , حي الاندلس , اعمال التشطيبات , توريد مواد البناء , تراخيص المباني'
          }
        ></meta>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Contact />
      <Footer />
    </>
  )
}
