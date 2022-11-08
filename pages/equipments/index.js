import React from 'react'
import Page from '../../components/layout/Page'
import Title from '../../components/ui/Title'
import LangContext from '../../utils/store'
import { useContext } from 'react'

export default function Projects() {
  const { en } = useContext(LangContext)

  return (
    <Page title="Equipments">
      <main className="mt-24  max-w-[95vw] ">
        <div className={`${en ? '' : 'rtl'} mx-auto max-w-7xl`}>
          <Title> {en ? 'Our Projects' : 'المشاريع'} </Title>
        </div>
      </main>
    </Page>
  )
}
