import React, { useEffect, useState } from 'react'

function Progress({ timer, goalTime }) {

  const progress = Math.floor((timer / goalTime) * 100)
  const [progressLeft, setProgressLeft] = useState(0);

  useEffect(() => {
    setProgressLeft(progress)
  }, [progress])

  // Actual progress bar.
  const progressBar_container = {
    height: "100%",
    width: `${progressLeft}%`,
    borderRadius: "inherit",
    backgroundColor: "blue",
    textAlign: "center",
    boxShadow: "0px 0px 10px #000000",
    transition: "width 1s ease-out"
  }

  return (
    <>
    <p>[!] This progress bar relies on the timer.</p>
      <span style={{ color: "white" , textShadow: "1px 1px 0 black", fontSize: 25 }}>{progressLeft}%</span>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className='container'>
          <div style={progressBar_container} />
        </div>
      </div>
    </>
  )
}

export default Progress