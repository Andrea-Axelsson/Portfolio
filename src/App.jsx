import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Project from "./components/Project"
import Checklist from "./components/Checklist"
import Icons from "./components/Icons"
import Clock from "./components/Clock"

import React, {useState} from "react"

/* 
Jag skall klicka på portfolio Ikonen
-Skapa ett useState för portfolioknappen som är default fault.
-Gör ett click event på portfolio ikonen här i App.jsx.
-När man clickar på den knappen så ändras useState till true.
-Skapa en prop i Portfolio komponenten som är kopplad till handle event funktionen.
-I Portfolio komponenten, lägg in props och sätt sedan en onCklick på diven som är kopplad till min handleEvent prop.
-Gör en ternery operator på className portfolioproject som ser om portfolio knappen blivit tryckt (true). Om den är true så kan classen bli display flex, annars none.
portbtn => toggleWindow(vad, true) => true ? "portfolio-component" : "window-closed
xBtn => toggleWindow(vad, false) => false ? "portfolio-component" : "window-closed
*/

const App = () => {

const [portfolioButton, setPortfolioButton] = useState(false)
console.log(portfolioButton)

const [xButton, setXButton] = useState(false)
console.log(xButton)

const handlePortfolioButton = () =>{
  setPortfolioButton(prevPortfolioButton => prevPortfolioButton = true)
}

const handleXButton = () =>{
  setXButton(prevXButton => prevXButton = true)
}


const windowStyles = portfolioButton ? "portfolio-component" : "window-closed"

  return (
    <div className="desktop-container"> 
        
        
        
        <div className="upper-desktop-row">
          <div className="icons">
            <Icons
             handlePortfolioButton={handlePortfolioButton}
            />
          </div>
          <div className={windowStyles}>
            <Portfolio
              handleXButton={handleXButton}
            />
          </div>
          <div className="project-component">
            <Project/>
        </div>
          <div className="about">
            <About/>
          </div>
        </div>

        <div className="bottom-desktop-row">
          <div className="checklist">
            <Checklist/>
          </div>
          <div className="clock-component">
            <Clock/>
          </div>
        </div>
        
        
    </div>
    
  
    

      
    
  )
}

export default App