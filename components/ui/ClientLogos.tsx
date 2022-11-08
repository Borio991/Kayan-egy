import React from 'react'
import Image from 'next/image'
import SliderContainer, { SliderItem } from './Slider'

const ClientLogos: any = () => {
  return (
    <>
      <SliderContainer
        className="enabled"
        contentWidth={1290}
        initialOffsetX={0}
      >
        <SliderItem width={250}>
          <Image
            src="/images/logos/Orascom.png"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/logos/Ahram.png"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/logos/imex.jpg"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/logos/Orascom.png"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/logos/new-sharm.jpg"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/logos/pyramids.png"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/logos/ta3meer.png"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/logos/urbans.jpg"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/logos/building.webp"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
      </SliderContainer>{' '}
      {/* <SliderContainer
        className="enabled"
        contentWidth={1290}
        initialOffsetX={125}
      >
        <SliderItem width={250}>
          <Image
            src="/images/clients/mdl-beast.png"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/ryiadh-season.png"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/water-company.png"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/saudi-electricity.png"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/stc.png"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/boulevard.jpeg"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/hay2a.jpeg"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/f1.jpeg"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>{' '}
        <SliderItem width={250}>
          <Image
            src="/images/clients/jedah-cornich.jpeg"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/wezaret-elreyada.jpeg"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/f.jpeg"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/rali-7a2l.jpeg"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/ayamna.jpeg"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={250}>
          <Image
            src="/images/clients/rali-sharkia.jpeg"
            width={250}
            height={100}
            alt=""
            objectFit="contain"
          />
        </SliderItem>
      </SliderContainer> */}
    </>
  )
}

export default ClientLogos
