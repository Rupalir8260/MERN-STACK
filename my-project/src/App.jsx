import React from 'react';
import "./App.css";

const App = () => {
  return (
    <header className='header'>
    <div className='visitors'>
      <h2>Good Morning,Rupali👋</h2>
      <p>Manage your visitors with VisitX by leveraging web-based process.</p>
      </div>
      <div className='search-box'>
        <search size={18}/>
        <input placeholder="Search Here..." />
      </div>
      <div className='notification'>
        <Bell size={20}/>
        <span className='notification-dot'>🔔</span>
      <hr></hr>
      <VisitorCards
     trend="2% up"
     title="Today Visitors In"
     value="120"
     color="purple"
     />
    </div>
    </header>
  )
}

export default App
