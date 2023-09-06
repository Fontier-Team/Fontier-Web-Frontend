import {useEffect, useState} from "react";

export const useGoogleFont = (font: string) => {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    setTimeout(async () => {
      const fontCSS = await fetch(`https://fonts.googleapis.com/css?family=${font}&display=block`)
      const style = document.createElement('style')
      style.innerHTML = await fontCSS.text()
      document.head.appendChild(style)
      setFontLoaded(true)
      return () => {
        document.head.removeChild(style)
      }
    }, 0)
  }, [font])

  return fontLoaded
}
