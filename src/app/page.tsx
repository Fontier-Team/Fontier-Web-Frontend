"use client"

import React from "react";
import NavBar from "@/components/section/Navbar";
import FontRecognition from "@/components/section/FontRecognition";
import FontRecommendation from "@/components/section/FontRecommendation";
import Image from "next/image";

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
          className={`flex flex-row items-center justify-center p-4 rounded-2xl bg-white cursor-pointer w-56 border-2 ${
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
      <Image className="fixed -z-50 -right-32 -top-32" src="/circles.svg" alt="" width={500} height={500} />
      <Image className="fixed -z-50 left-[calc(40vw-250px)] -bottom-48" src="/circles.svg" alt="" width={500} height={500} />
      <NavBar />
      <main className="flex flex-col items-center px-5">
        <div className="content-width w-full flex flex-col items-start gap-3">
          <TabButtonGroup
            options={["FIND SIMILAR LOOKING FONT", "MATCH FONT BASED ON CONTENT"]}
            selected={selected}
            onClick={setSelected}
          />
          <div className="w-full" style={{ display: selected === 0 ? undefined : "none" }}>
            <FontRecognition />
          </div>
          <div className="w-full" style={{ display: selected === 1 ? undefined : "none" }}>
            <FontRecommendation />
          </div>
        </div>
      </main>
    </>
  )
}
