import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Timer from './Timer';
import { TimerContent } from "./TimerCxt";

function Modal({ item, setItem, itemArr }) {
  const items = itemArr;
  var { title, desc, element, id } = item;
  const { setTime, endTime, timePaused } = useContext(TimerContent)
  const nav = useNavigate()

  const msg = `${title} \n ${desc}`

  useEffect(() => {
    if (timePaused) return
    const activeItem = document.getElementById(`sidebar-item${id}`)
    var color = activeItem.style.backgroundColor;
    setTime(0);
    // This code will be replaced by routing... ONCE routing works.
    // setItem(items[id >= (items.length - 1) ? 0 : id + 1])
    const interval = setTimeout(() => {
      setItem(items[id >= (items.length - 1) ? 0 : id + 1])
      nav(`:${id >= (items.length - 1) ? 0 : id + 1}`, { replace: true, state: "" })
    }, (endTime * 1000))
    return () => clearInterval(interval)
  }, [item, endTime, timePaused])

  return (
    <div className='sideBar-item-modal'>
      <h1 className='line'>{msg}</h1>
      <span>{element}</span>
      <Timer />
    </div>
  )
}

export default Modal