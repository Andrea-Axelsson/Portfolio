import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Project from "./components/Project"
import Checklist from "./components/Checklist"
import Icons from "./components/Icons"
import Clock from "./components/Clock"
import React, {useState} from "react"
import DesktopIconsData from "./data/DesktopIconsData"
import PortfolioData from "./data/PortfolioData"
import PortfolioIcon from "./components/PortfolioIcon"
import ProjectData from "./data/ProjectData"

const App = () => {

  /* När man öppnar ett portfolioprojekt så skall bara ett projekt öppnas, inte alla. */


  const [desktopWindows, setdesktopWindows] = useState(DesktopIconsData)
  const [portfolioWindows, setPortfolioWindows] = useState(PortfolioData)

  const togglePortfolioWindows = (id) => {
    setPortfolioWindows(prevPortfolioWindows => {
      return prevPortfolioWindows.map((portfolioWindow) =>{
        if (portfolioWindow.id === id){
          console.log(portfolioWindow.clicked)
        }
        return portfolioWindow.id === id ? {...portfolioWindow, clicked: !portfolioWindow.clicked} : portfolioWindow
      })
    })
  }

  const toggleDesktopWindows = (id) => {
    setdesktopWindows(prevdesktopWindows => {
      return prevdesktopWindows.map((desktopWindow) =>{
        if (desktopWindow.id === id){
          console.log(desktopWindow.clicked)
        }
        return desktopWindow.id === id ? {...desktopWindow, clicked: !desktopWindow.clicked} : desktopWindow
      })
    })
  }

  const portfolioWindow = desktopWindows.find(desktopWindow => desktopWindow.id === 4)

  const aboutWindow = desktopWindows.find(desktopWindow => desktopWindow.id === 1)
  
const projectWindow = portfolioWindows.find(portfolioWindow => portfolioWindow.id ===1)

const desktopIcons = DesktopIconsData.map(icon => {
  return (
    <Icons
    key={icon.id}
    id={icon.id}
    iconPng={icon.iconPng}
    altText={icon.altText}
    iconText={icon.iconText}
    onIconClick={() => toggleDesktopWindows(icon.id)}

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
    onIconClick={() => togglePortfolioWindows(icon.id)}
    />
  )
})

const portfolioProject = ProjectData.map(project => {
  return (
    <Project
    id={project.id}
    projectTitle={project.projectTitle}
    projectImage={project.projectImage}
    tags={project.tags}
    bodyText={project.bodyText}
    onClose={() => togglePortfolioWindows(projectWindow.id)}
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
          {portfolioWindow && portfolioWindow.clicked && 
          (<div className="portfolio-component">
            <Portfolio
            portfolioIcon ={portfolioIcon}
            onClose={() => toggleDesktopWindows(portfolioWindow.id)}
            />
          </div>
         )} 

{projectWindow && projectWindow.clicked && (
  <div className="project-component">
            {portfolioProject}
        </div>

)}
        


          {aboutWindow && aboutWindow.clicked &&(
            <div className="about">
            <About
            onClose={() => toggleDesktopWindows(aboutWindow.id)}
            />
          </div>
          )}
          
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



/* const desktopWindowstyles = portfolioButton ? "portfolio-component" : "window-closed" */