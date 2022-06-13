import React, { useEffect, useState } from 'react'
import { Timer } from './Timer';

// const changeCard = (method="add") => {
//   if (method === "add") {
//     return setItem(items[id >= (items.length - 1) ? 0 : id + 1])
//   }
//   return setItem(items[id < 1 ? (items.length - 1) : id - 1])
// }

function Modal({ open, setModalOpen, item, setItem, itemArr }) {
  const items = itemArr;
  var { desc, id } = item;

  useEffect(() => {
    if (open) setTimeout(() => setItem(items[id >= (items.length - 1) ? 0 : id + 1]), 15000)
  }, [item])

  return (
    <div className='sideBar-item-modal'>
      <span>{desc}</span>
      <button onClick={() => setModalOpen(false)}>Close</button>
    </div>
  )
}

export default Modal