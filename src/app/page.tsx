"use client"

import Image from 'next/image'
import React from "react";

const NavBar = () => {
  return (
    <div className="w-full flex flex-row items-center justify-center p-5">
      <div className="content-width h-full flex flex-row grow items-center gap-2">
        <Image src="/fontier-icon.svg" alt="Logo" width={50} height={50} />
        <div className="font-space-grotesk font-light text-lg">Fontier</div>
        <div className="grow"/>
      </div>
    </div>
  )
}

interface TabButtonGroupProps {
  options: string[]
  selected: number
  onClick: (index: number) => void
}

const TabButtonGroup: React.FC<TabButtonGroupProps> = ({ options, selected, onClick }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      {options.map((option, index) => (
        <div
          key={index}
          className={`flex flex-row items-center justify-center p-4 rounded-lg bg-white cursor-pointer w-56 border-2 ${
            selected === index ? 'border-primary-text shadow-lg' : 'border-white'
          }`}
          onClick={() => onClick(index)}
        >
          <div className={`w-40 ${
            selected === index ? 'text-primary-text' : 'text-secondary-text'
          }`}>
            {option}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  const [selected, setSelected] = React.useState(0)
  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center px-5">
        <div className="content-width w-full flex flex-col items-start gap-3">
          <TabButtonGroup
            options={["FIND SIMILAR LOOKING FONT", "MATCH FONT BASED ON CONTENT"]}
            selected={selected}
            onClick={setSelected}
          />
          <div className="card w-full h-[600px]">

          </div>
        </div>
      </main>
    </>
  )
}
