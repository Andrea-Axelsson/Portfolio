import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Project from "./components/Project"
import Checklist from "./components/Checklist"
import Icons from "./components/Icons"
import Clock from "./components/Clock"
import React, {useState} from "react"

/* 
-Skapa ett useState med namnet windows som innehåller ett objekt med properties för varje komponent med värdet : false 

-Skapa en toggleWindow function som tar parametern windowName. Detta är ett generiskt namn som blir mer specifikt i argumentet sen.
-I toggle använd setWindows för att toggla vald property.

-Skapa en prop i Icons som kallar på functionen toggleWindow och som använder den specifika argumentet.

-Gör en ternery operator runt diven med portfolio som avgör om propertyn är true, då kan diven visas. 


*/

const App = () => {

  const[windows, setWindows] = useState({
    portfolio: false,
    project: false,
    about: false,
    checklist: false
  })


const toggleWindow = (windowName) => {
  setWindows(prevWindows =>({...prevWindows, [windowName]: !prevWindows [windowName]}))
}

  return (
    <div className="desktop-container"> 
        
        
        
        <div className="upper-desktop-row">
          <div className="icons">
            <Icons
            onIconClick={() => toggleWindow("portfolio")}
            />
          </div>
          {windows.portfolio && 
          (<div className="portfolio-component">
            <Portfolio
            onIconClick={() => toggleWindow("project")}
            onClose={() => toggleWindow("portfolio")}
            />
          </div>
          )}

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