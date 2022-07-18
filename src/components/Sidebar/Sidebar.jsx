import React from "react";
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <h3 className="sidebar__title">Hello user</h3>
        <div className="sidebar__itemContainer">
            <div className="sidebar__item">RFM</div>
            <div className="sidebar__item">Incio</div>
            <div className="sidebar__item">Settings</div>
            <div className="sidebar__item">Log out</div>
        </div>
    </div>
  )
}

export default Sidebar