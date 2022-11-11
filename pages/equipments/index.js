import React from 'react'
import Page from '../../components/layout/Page'
import Title from '../../components/ui/Title'
import LangContext from '../../utils/store'
import { useContext } from 'react'
import Equipements from '../../components/HomePage/Equipments'

export default function Projects() {
  const { en } = useContext(LangContext)

  return (
    <Page title="projects">
      <main className="mt-24  max-w-[95vw] ">
        <div className={`${en ? '' : 'rtl'} mx-auto max-w-7xl`}>
          <Equipements url={true} />
        </div>
      </main>
    </Page>
  )
}
