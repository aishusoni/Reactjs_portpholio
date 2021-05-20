import React, { Component } from 'react';
import resumeData from './resumeData';
import Navbar from './portfolio/navbar';
import Brief from './portfolio/brief';
import Work from './portfolio/work';
import Educat from './portfolio/education';
import Footer from './portfolio/footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="body">
        <Navbar resumeData={resumeData}/>
        <Brief resumeData={resumeData}/>
        <Educat resumeData={resumeData}/>
        <Work resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
        
      </div>
    );
  }
}

export default App;