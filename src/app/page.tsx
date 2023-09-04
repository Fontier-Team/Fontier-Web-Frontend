"use client"

import React from "react";
import {ImageUploadZone} from "@/components/ui/ImageUpload";
import {NavBar} from "@/components/section/Navbar";
import {FontPreview} from "@/components/ui/FontPreview";

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

interface FontPreviewListProps {
  fonts: FontOverview[]
  previewText: string
}

const FontPreviewList: React.FC<FontPreviewListProps> = ({ fonts, previewText }) => {
  return (
    <div className="flex flex-col items-stretch gap-4">
      {fonts.map((font, index) => (
        <FontPreview
          key={index}
          font={font}
          previewText={previewText ? previewText : "Discover Free Fonts with AI"}
          fontSize={20}
        />
      ))}
    </div>
  )
}

export default function Home() {
  const [selected, setSelected] = React.useState(0)
  const [image, setImage] = React.useState<File | null>(null)
  const [previewText, setPreviewText] = React.useState<string>("")

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
          <div className="card w-full h-[600px] flex flex-row gap-4">
            <div className="flex-1 flex flex-col gap-4">
              <div className="grow">
                <ImageUploadZone image={image} onUpload={(image) => setImage(image)} />
              </div>
              <textarea
                value={previewText}
                onChange={(e) => setPreviewText(e.target.value)}
                className="gray-card placeholder:text-primary-gray focus:outline-none h-20"
                placeholder="Enter text here to preview the corresponding font effect."
              />
            </div>
            <div className="flex-1">
              <FontPreviewList
                fonts={[
                  {
                    name: "Space Grotesk",
                    variants: [],
                    displayName: "Space Grotesk",
                    downloadUrl: "",
                  },
                  {
                    name: "Inter",
                    variants: [],
                    displayName: "Inter",
                    downloadUrl: "",
                  }
                ]}
                previewText={previewText}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
