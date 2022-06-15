import React, { useEffect, useContext } from 'react'
import Timer from './Timer';
import { TimerContent } from "./TimerCxt";

function Modal({ item, setItem, itemArr }) {
  const items = itemArr;
  var { title, desc, element, id } = item;
  const { setTime, endTime, timePaused } = useContext(TimerContent)

  const msg = `${title} \n ${desc}`

  useEffect(() => {
    if (timePaused) return
    const activeItem = document.getElementById(`sidebar-item${id}`)
    var color = activeItem.style.backgroundColor;
    setTime(0);
    const interval = setTimeout(() => setItem(items[id >= (items.length - 1) ? 0 : id + 1]), (endTime * 1000))
    return () => clearInterval(interval)
  }, [item])

  return (
    <div className='sideBar-item-modal'>
      <h1 className='line'>{msg}</h1>
      <span>{element}</span>
      <Timer />
    </div>
  )
}

export default Modal