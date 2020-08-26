import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";



export default function App() {
return (
  <div className="app">
    <Sidebar/> 
    <Feed/>
    <Widgets/> 
  </div>
);
};

