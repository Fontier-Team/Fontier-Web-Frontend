import React, {useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

interface FontPreviewProps {
  font: FontOverview
  previewText: string
  fontSize: number
}

export const FontPreview: React.FC<FontPreviewProps> = ({ font, previewText, fontSize }) => {
  const [fontLoaded, setFontLoaded] = React.useState(false)

  useEffect(() => {
    setTimeout(async () => {
      const fontCSS = await fetch(`https://fonts.googleapis.com/css?family=${font.name}&display=block`)
      const style = document.createElement('style')
      style.innerHTML = await fontCSS.text()
      document.head.appendChild(style)
      setFontLoaded(true)
      return () => {
        document.head.removeChild(style)
      }
    }, 0)
  }, [font.name])

  if (!fontLoaded) return null

  return (
    <>
      <div className="flex flex-col items-stretch rounded-lg h-40 shadow-lg">
        <div className="bg-secondary-orange px-6 py-2 rounded-t-lg flex flex-row">
          <div className="grow">{font.displayName}</div>
          <Link href={font.downloadUrl}>
            <div className="flex flex-row items-center gap-2">
              <div>Download Font</div>
              <Image src="/download.svg" alt="download" width={16} height={16} />
            </div>
          </Link>
        </div>
        <div className="grow rounded-b-lg px-6 py-2 text-black" style={{ fontFamily: `${font.name}`, fontSize }}>
          {previewText}
        </div>
      </div>
    </>
  )
}
