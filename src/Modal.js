import React from 'react'

function Modal({ setModalOpen, item, setItem, itemArr }) {
  const items = itemArr;
  var { desc, id } = item;
  return (
    <div className='sideBar-item-modal'>
      <button onClick={() => setItem(items[id <= (items.length - 1) ? (items.length - 1) : id--])}>Previous</button>
      <span>{id} : {desc}</span>
      <button onClick={() => setItem(items[id > (items.length - 1) ? 0 : id++])}>Next</button>
      <button onClick={() => setModalOpen(false)}>Close</button>
    </div>
  )
}

export default Modal