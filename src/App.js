
// import React, { Component } from 'react';
// import './App.css';
// import NavBar from './components/navbar';
// import Counters from './components/counters';


// function App() {
//   return (
//     <React.Fragment>
//       <NavBar />
//       <main className="container">
//         <Counters />
//       </main>
//     </React.Fragment>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Header from './components/common/Header';
import PageNotFound from './components/PageNotFound';
import CoursesPage from './components/courses/CoursesPage';

function App() {
  return (

    <div className="container-fluid">
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}

export default App;
