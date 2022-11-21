import React from 'react';
import "../assets/styles/main.scss";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Widget from '../components/Widget';
import FeaturedChart from '../components/FeaturedChart';
import Chart from '../components/Chart';

// indexedDB Start here
/*
(()=>{

  if('indexedDB' in window){
    console.log("Your Browser does not support IndexedDB Database");
    return;
  }


})();


  const dbname = "LendsqrDB";
  const requestDB=window.indexedDB.open(dbname);

  requestDB.onupgradeneeded=()=>{
    let db=requestDB.result;
    let userdata = db.createObjectStore("user",{autoIncrement:true});

    // add data
    userdata.put({sno: "1", createdAt: "2072-12-27T03:44:22.522Z", orgName: "labore-dolor-et"});
    userdata.put({sno: "2", createdAt: "2089-05-21T04:15:40.501Z", orgName: "accusamus-minima-repudiandae"});
    userdata.put({sno: "3", createdAt: "2021-08-19T01:36:16.155Z", orgName: "natus-harum-unde"});
  }

  requestDB.onsuccess=()=>{
    if(requestDB.readyState=="done"){
      console.log("hhhh");
    }
  };
*/
// indexeddb Ends here

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <Sidebar />
        
        <div className="dashboardContainer">
            <Navbar />
            <div className="userpage">
            <span className="userText">My Dashboard</span>
            </div>

            <div className="widgets">
              <Widget type="user" />
              <Widget type="order" />
              <Widget type="earning" />
              <Widget type="balance" />
            </div>
            <div className="chartsContainer">
              <FeaturedChart />
              <Chart />
            </div>
        </div>
    </div>
  )
}

export default Dashboard;