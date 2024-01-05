import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Project from "./components/Project"
import Checklist from "./components/Checklist"
import Icons from "./components/Icons"
import Clock from "./components/Clock"
import React, {useState} from "react"
import IconData from "./data/IconData"
import PortfolioData from "./data/PortfolioData"
import PortfolioIcon from "./components/PortfolioIcon"

const App = () => {

/*   const[windows, setWindows] = useState({
    portfolio: false,
    project: false,
    about: false,
    checklist: false
  }) */

  
  
  const [windows, setWindows] = useState(IconData)

  const toggleWindow = (id) => {
    setWindows(prevWindows => {
      return prevWindows.map((window) =>{
        return window.id === id ? {...window, clicked: !window.clicked} : window
      })
    })
  }
  

/* const toggleWindow = (windowName) => {
  setWindows(prevWindows =>({...prevWindows, [windowName]: !prevWindows [windowName]}))
} */


const desktopIcons = IconData.map(icon => {
  return (
    <Icons
    key={icon.id}
    id={icon.id}
    iconPng={icon.iconPng}
    altText={icon.altText}
    iconText={icon.iconText}
    onIconClick={() => toggleWindow(icon.id)}
    />
  )
})


const portfolioIcon = PortfolioData.map(icon => {
  return (
    <PortfolioIcon
    key={icon.id}
    id={icon.id}
    iconPng={icon.iconPng}
    altText={icon.altText}
    iconText={icon.iconText}
    /* onIconClick={() => toggleWindow(icon.id)} */
    />
  )
})

  return (
    <div className="desktop-container"> 
        
        
        
        <div className="upper-desktop-row">
          
          <div className="icons">
          <section className="container--small-width">
            <section className="all-icons-group">
            {desktopIcons}
            </section>
          </section>

          </div>
         {/*  {windows.portfolio && 
          ( */}<div className="portfolio-component">
            <Portfolio
            portfolioIcon ={portfolioIcon}
            />
          </div>
        {/*   )} */}

            {windows.project &&
            (<div className="project-component">
            <Project
            onClose={() => toggleWindow("project")}
            />
        </div>
        )}

          
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




/* const [portfolioButton, setPortfolioButton] = useState(false)
console.log(portfolioButton)

const [xButton, setXButton] = useState(false)
console.log(xButton)

const handlePortfolioButton = () =>{
  setPortfolioButton(prevPortfolioButton => prevPortfolioButton = true)
}

const handleXButton = () =>{
  setXButton(prevXButton => prevXButton = true)
} */



/* const windowStyles = portfolioButton ? "portfolio-component" : "window-closed" */