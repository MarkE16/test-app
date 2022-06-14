import React, { useEffect, useState } from 'react'
import Progress from './Progress';
import { Timer } from './Timer';

function Modal({ item, setItem, itemArr, timer, setTimer, goalTime }) {
  const items = itemArr;
  var { title, desc, element, id } = item;

  const msg = `${title} \n ${desc}`

  useEffect(() => {
    const activeItem = document.getElementById(`sidebar-item${id}`)
    var color = activeItem.style.backgroundColor;
    setTimer(0);
    const interval = setTimeout(() => setItem(items[id >= (items.length - 1) ? 0 : id + 1]), (goalTime * 1000))
    return () => clearInterval(interval)
  }, [item])

  return (
    <div className='sideBar-item-modal'>
      <h1 className='line'>{msg}</h1>
      <span>{element}</span>
      <Timer timer={timer} setTimer={setTimer} goalTime={goalTime} />
    </div>
  )
}

export default Modal