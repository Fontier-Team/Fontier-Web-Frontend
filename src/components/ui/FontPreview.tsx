import React from "react";
import Link from "next/link";
import Image from "next/image";
import {useGoogleFont} from "@/utils/hooks";

interface FontSizeSelectorProps {
  fontSize: number
  numFonts: number
  onChange: (fontSize: number) => void
}

export const FontSizeSelector: React.FC<FontSizeSelectorProps> = ({ fontSize, numFonts, onChange }) => {
  return (
    <div className="rounded-xl px-6 py-4 flex flex-row items-center shadow-lg gap-2 text-secondary-text">
      {numFonts === 0 ? (
        <div className="grow">
          Free Open Source Font
        </div>
      ) : (
        <>
          <div className="w-12 text-right">{fontSize} px</div>
          <div className="w-60 flex flex-row items-center">
            <input
              className="slider"
              type="range"
              value={fontSize}
              min={0}
              max={96}
              onChange={e => onChange(Number(e.target.value))}
            />
          </div>
          <div className="grow" />
          <div>
            • {numFonts} Similar Fonts
          </div>
        </>
      )}
      <Image src="/color-ring.png" alt="" width={24} height={24} />
    </div>
  )
}

interface FontPreviewProps {
  font: FontOverview
  previewText: string
  fontSize: number
}

export const FontPreview: React.FC<FontPreviewProps> = ({ font, previewText, fontSize }) => {
  const fontLoaded = useGoogleFont(font.name)

  if (!fontLoaded) return null

  return (
    <>
      <div className="flex flex-col items-stretch">
        <div className="flex flex-col items-stretch rounded-lg shadow-lg">
          <div className="bg-secondary-orange text-secondary-text px-6 py-2 rounded-t-lg flex flex-row">
            <div className="grow">{font.displayName}</div>
            <Link href={font.downloadUrl}>
              <div className="flex flex-row items-center gap-2">
                <div>Download Font</div>
                <Image src="/download.svg" alt="download" width={16} height={16} />
              </div>
            </Link>
          </div>
          <div className="min-h-[112px] flex flex-row items-center">
            <div className="bg-white grow rounded-b-lg px-6 py-2 text-black" style={{ fontFamily: `${font.name}`, fontSize }}>
              {previewText}
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap">
          {font.variants.map((variant, index) => (
            <div key={index} className="rounded-lg shadow-lg bg-secondary-orange text-secondary-text px-6 py-2 m-2">
              {variant}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

interface FontPreviewListProps {
  fonts: FontOverview[]
  previewText: string
  matching: boolean
}

export const FontPreviewList: React.FC<FontPreviewListProps> = ({ fonts, previewText, matching }) => {
  const [fontSize, setFontSize] = React.useState(32)
  return (
    <div className="flex flex-col items-stretch gap-6">
      <FontSizeSelector fontSize={fontSize} numFonts={fonts.length} onChange={setFontSize} />
      {matching ? (
        <div className="card flex flex-row items-center justify-center text-primary-gray shadow-lg h-40">
          matching...
        </div>
      ) : fonts.map((font, index) => (
        <FontPreview
          key={index}
          font={font}
          previewText={previewText ? previewText : "Discover Free Fonts with AI"}
          fontSize={fontSize}
        />
      ))}
    </div>
  )
}
