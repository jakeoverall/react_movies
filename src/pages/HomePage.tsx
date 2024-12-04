import { useEffect, useState } from "react";

export default function HomePage() {

  const [x, setX] = useState(7)
  // NOTE pretty much a onMounted
  useEffect(() => {
    console.log('did it mount?')
  }, [])

  function changeX(){
    // x += 1 ⛔ NOOOO That is a mutation. Its not allowed
    let y = x + 1
    setX(x + 1000)
  }


  return (
    <div className="home-page">
      <button onClick={changeX}>{x}</button>
    </div>
  )
}