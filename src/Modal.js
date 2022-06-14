import React, { useEffect, useState } from 'react'
import Progress from './Progress';
import { Timer } from './Timer';

function Modal({ setModalOpen, item, setItem, itemArr }) {
  const items = itemArr;
  const [time, setTime] = useState(0);
  const [endTime, setEndTime] = useState(15);
  var { title, desc, id } = item;

  const msg = `${title} \n ${desc}`

  useEffect(() => {
    const activeItem = document.getElementById(`sidebar-item${id}`)
    var color = activeItem.style.backgroundColor;
    const interval = setTimeout(() => setItem(items[id >= (items.length - 1) ? 0 : id + 1]), (endTime * 1000))
    return () => clearInterval(interval)
  }, [item])

  return (
    <div>
      <div className='sideBar-item-modal'>
        <span className='line'>{msg}</span>
        <button onClick={() => setModalOpen(false)}>Close</button>
      </div>
      <Timer timer={time} setTimer={setTime} goalTime={endTime} />
      <Progress timer={time} goalTime={endTime} />
    </div>
  )
}

export default Modal