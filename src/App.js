// Devin Brueberg
// CSC435 Adv Web App Development
// Assignment 1 - App.js
// March 3, 2021

// Using React library in order to build components 
// for the app
import React from 'react';
// Importing the App.css file to be used with the 
// HTML generated components
import './App.css';

/**
 * The App() function will return a component consisting of 
 * the header, first name, last name, and subject of the 
 * users course. The const variable are defined at the 
 * top of the function and can be changed if desired
 */
function App() {
  // Naming the constant variables that will be 
  const fName = "Devin";
  const lName = "Brueberg";
  const subjectName = "CSC 435 Adv Web App Development";
  const projectDate = "March 3, 2021";

  // The return is what this component will return to the 
  // caller. This return consists of some HTML elements 
  // that will create a h1 title header followed by the 
  // name, subject name, and project date of this App
  return (
    
    //  Only one main div is allowed per component so the main div 
    // is defined here. It will hold the components contents
    <div id="main"> 
      
      {/* Page Heading */}
      <h1>
        Welcome to the React App
      </h1>
        
      {/* This div will flex in the css */}
      <div id="flex">
        {/* Using a ul to include the name, class, and date. 
            The const are referenced here and added to the 
            HTML via JavaScript
          */}
        <ul>
            <li>
                {fName} {lName}
            </li>
            <li>
                {subjectName}
            </li>
            <li>
                {projectDate}
            </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
