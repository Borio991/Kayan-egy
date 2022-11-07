import React, { useContext } from 'react'
import Title from '../ui/Title'
import LangContext from '../../utils/store'
import HomePageEquipmentsCard from '../ui/HomePageEquipmentsCard'

export default function Equipments() {
  const { en } = useContext(LangContext)
  return (
    <div className="bg-zinc-200 px-4 py-2 sm:px-6 md:py-8 lg:px-12">
      <div className={`mx-auto max-w-7xl  py-2  md:py-8 ${en ? '' : 'rtl'}`}>
        <Title>{en ? 'Our Projects' : 'احدث مشاريعنا'}</Title>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <HomePageEquipmentsCard
            src="/images/project-section/property-1.jpg"
            title={
              en
                ? 'Bait Al-watan - property 69 - 5th District'
                : 'بيت الوطن قطعة 69 - الحي الخامس'
            }
          />
          <HomePageEquipmentsCard
            src="/images/project-section/property-2.jpg"
            title={
              en
                ? 'Bait Al-watan - property 411 - 5th District'
                : 'بيت الوطن قطعة 411 - الحي الخامس'
            }
          />
          <HomePageEquipmentsCard
            src="/images/project-section/property-3.jpg"
            title={
              en
                ? 'Bait Al-watan - property 310 - 5th District'
                : 'بيت الوطن قطعة 310 - الحي الخامس'
            }
          />
          <HomePageEquipmentsCard
            src="/images/project-section/property-4.jpg"
            title={
              en
                ? 'Al Andalus 2 - property 110 - 5th District'
                : 'الاندلس 2 - قطعة 110 - الحي الخامس'
            }
          />
        </div>
      </div>
    </div>
  )
}
