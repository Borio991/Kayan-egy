import React, { useContext } from 'react'
import LangContext from '../../utils/store'

function LogoSvg() {
  const { en, changeLang } = useContext(LangContext)

  return (
    <div className=" h-full w-full">
      <svg viewBox="0 0 862.4 180">
        <g id="Group_1" dataname="Group 1" transform="translate(-862.4 -644)">
          <g
            id="Logo"
            transform={en ? 'translate(862.4 660)' : 'translate(862.4 660)'}
          >
            <path
              className={`path`}
              pathLength="1"
              d="M182,101s-34,56-121,32c0,0-93-43-6-102,0,0,56-29,100-2,0,0,27,12,17,46,0,0-5,21-32,29V85H109v27H70V75L59,74l77-37"
              style={{
                fill: 'none',
                stroke: '#5fb343',
                strokeMiterlimit: 20,
                strokeWidth: '10px',
              }}
            />
            <text
              id="Kayan_Developments"
              dataname="Kayan Developments"
              transform={`${
                en ? 'translate(190.6 135.11)' : 'translate(862.4 135.11)'
              }`}
              fontSize="66"
              fontFamily="Andalus"
              fill="#fff"
            >
              <tspan x="0" y="0">
                Kayan Developments
              </tspan>
            </text>
          </g>
          <text
            id="كـيان_للــتطويـر_العقــاري"
            dataname="كـيان للتطويـر العقـاري"
            transform={`${en ? 'translate(1058 728)' : 'translate(1700 728)'}`}
            fill="#fff"
            fontSize="76"
            fontFamily="Andalus"
            letterSpacing="0.015em"
          >
            <tspan x="0" y="0">
              كـيان للتطويـر العقـاري
            </tspan>
          </text>
        </g>
      </svg>
    </div>
  )
}

export default LogoSvg
