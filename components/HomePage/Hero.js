import React, { useContext } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import SliderImg from '../ui/SliderImg'
import LangContext from '../../utils/store'

function Hero() {
  const { en } = useContext(LangContext)

  return (
    <div className="mt-24">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={3000}
      >
        <SliderImg
          src="/images/slider/slide-11.jpg"
          heading1={en ? 'We Provide' : 'نقوم بتوفير'}
          heading2={en ? 'Variety of Properties' : 'مجموعه متنوعة من العقارات'}
          cta={en ? 'Contact Us For More' : 'للمزيد تواصل معنا'}
        />
        <SliderImg
          src="/images/slider/slide-22.jpg"
          heading1={en ? 'We Provide' : 'نقوم بتوفير'}
          heading2={
            en ? 'Supply of construction materials' : 'توريد مواد البناء '
          }
          cta={en ? 'Contact Us For More' : 'للمزيد تواصل معنا'}
        />
        <SliderImg
          src="/images/slider/slide-22.jpg"
          heading1={en ? 'We Build' : 'نقوم بانشاء'}
          heading2={en ? 'Concrete Structures' : 'منشأت خرسانيه'}
          cta={en ? 'Contact Us For More' : 'للمزيد تواصل معنا'}
        />
      </Carousel>
    </div>
  )
}

export default Hero
