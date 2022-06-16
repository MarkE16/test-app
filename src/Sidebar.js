import React, { useContext, useEffect, useState } from 'react'
import "./App.css"
import Modal from './Modal';
import LineChart1 from './LineChart1';
import LineChart2 from './LineChart2';
import LineChart3 from './LineChart3';
import BarChart1 from './BarChart1';
import PieChart1 from "./PieChart1";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom"
import { TimerContent } from './TimerCxt';

const SidebarItem = ({ item, setItemOn, setItem }) => {
  const nav = useNavigate();
  
  return (
    <>
      <div className='sideBar-item' id={`sidebar-item${item.id}`} onClick={() => {
        setItem(item);
        setItemOn(true);
        nav(`:${item.id}`, { replace: true })
      }}>
        <p>{item.title}</p>
      </div>
    </>
  )
}

function Sidebar() {
  const sidebarItems = [
    {title: "Title 1", desc: "Description 1", element: <LineChart1 />, id: 0},
    {title: "Title 2", desc: "Description 2", element: <LineChart2 />, id: 1},
    {title: "Title 3", desc: "Description 3", element: <LineChart3 />, id: 2},
    {title: "Title 4", desc: "Description 4", element: <BarChart1 />, id: 3},
    {title: "Title 5", desc: "Description 5", element: <PieChart1 />, id: 4},
    {title: "Title 6", desc: "Description 6", element: <PieChart1 />, id: 5},
  ]

  const { itemActive, setItemActive } = useContext(TimerContent);
  const [item, setItem] = useState();
 

  return (
    <div className='sidebar-container'>
      <div className='sideBar'>
        <Routes>
          <Route path={`/${sidebarItems[0].id}`} element={ <SidebarItem item={sidebarItems[0]} setItemOn={setItemActive} setItem={setItem} /> } />
        </Routes>
          {
            sidebarItems.map(i => {
              return (
                <SidebarItem item={i} setItemOn={setItemActive} setItem={setItem} />
              )
            })
          }
      </div>
      { itemActive && <Modal item={item} itemArr={sidebarItems} setItem={setItem}/> }
    
    </div>
  )
}

export default Sidebar