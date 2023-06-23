import React from 'react';
import './dashboard.css';
import SideBar from './SideBar/SideBar';
import NavBar from './NavBar/NavBar';
import BoxMenu from './BoxMenu/BoxMenu';
import Graph from './Graph/Graph';
import Products from './Products/Products';
import Schedule from './Schedule/Schedule';
function Dashboard() {
    return (
        <div className='dashboardContainer'>
            <SideBar />
            <div className='dashboardBody'>
                <NavBar />
                <BoxMenu />
                <Graph />
                {/* <div className='dashboardSub'>
                    <Products />
                    <Schedule/>
                </div> */}
            </div>
        </div>
    )
}

export default Dashboard;