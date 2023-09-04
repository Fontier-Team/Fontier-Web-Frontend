import React, {useEffect} from "react";

const FontRecommendation = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")

  useEffect(() => {
    if (!name) {
      setEmail("")
    }
  }, [name])

  return (
    <div className="card bg-transparent-orange w-full min-h-[600px] flex flex-col items-center justify-center gap-4">
      <div className="slogan text-4xl">
        Join wait list now for the next gen
      </div>
      <div className="slogan text-4xl">
        AI Font Discovering Tool!
      </div>
      <div className="w-80 flex flex-col gap-4 mt-12">
        <input
          className="text-input-large w-full"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="text-input-large w-full"
          placeholder="Your email address"
          disabled={!name}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button className="button-large w-full mt-8" disabled={!email}>Grab your spot!</button>
      </div>
    </div>
  )
}

export default FontRecommendation
