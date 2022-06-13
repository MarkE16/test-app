import React, { useEffect, useState } from 'react'
import "./App.css"
import Modal from './Modal';

const SidebarItem = ({ item, setItemOn, setItem}) => {
  
  
  return (
    <>
      <div className='sideBar-item' id={`sidebar-item${item.id}`} onClick={() => {
        setItem(item);
        setItemOn(true);
      }}>
        <p>{item.title}</p>
      </div>
    </>
  )
}

function Sidebar() {
  const sidebarItems = [
    {title: "Cool stuff", desc: "News about cool stuff",  id: 1},
    {title: "More News", desc: "News about more news",  id: 2},
    {title: "Some more News", desc: "News about some more news",  id: 3},
    {title: "Even more News", desc: "News about even more news",  id: 4},
    {title: "Awesome News", desc: "News about awesome news",  id: 5},
  ]

  const [itemActive, setItemActive] = useState(false);
  const [item, setItem] = useState();

  useEffect(() => {
    if (item) {
      const sidebar = document.getElementById("sideBar");
      sidebar.addEventListener("click", () => document.getElementById(`sidebar-item${item.id}`).style.backgroundColor = "red")
    } else {

    }
  }, [])

  return (
    <div className='sidebar-container'>
      <div className='sideBar'>
        {
          sidebarItems.map(i => {
            return <SidebarItem item={i} setItemOn={setItemActive} setItem={setItem} />
          })
        }
      </div>
      { itemActive && <Modal setModalOpen={setItemActive} item={item} itemArr={sidebarItems} setItem={setItem}/> }
    </div>
  )
}

export default Sidebar