import {ImageUploadZone} from "@/components/ui/ImageUpload";
import {FontPreviewList} from "@/components/ui/FontPreview";
import React from "react";

const TEST_FONTS_DATA = [
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
]

const FontRecognition = () => {
  const [image, setImage] = React.useState<File | null>(null)
  const [previewText, setPreviewText] = React.useState<string>("")
  const [matching, setMatching] = React.useState(false)
  const [fonts, setFonts] = React.useState<FontOverview[]>([])

  return (
    <div className="large-card bg-white w-full min-h-[600px] flex flex-row gap-8">
      <div className="flex-1 flex flex-col gap-6">
        <div className="h-96">
          <ImageUploadZone image={image} onUpload={(image) => {
            setImage(image)
            setMatching(true)
            setFonts([])
            setTimeout(() => {
              setFonts(TEST_FONTS_DATA)
              setMatching(false)
            }, 1000)
          }} />
        </div>
        <textarea
          value={previewText}
          onChange={(e) => setPreviewText(e.target.value)}
          className="card bg-secondary-gray placeholder:text-primary-gray focus:outline-none h-28"
          placeholder="Enter text here to preview the corresponding font effect."
        />
      </div>
      <div className="flex-1">
        <FontPreviewList
          fonts={fonts}
          previewText={previewText}
          matching={matching}
        />
      </div>
    </div>
  )
}

export default FontRecognition
