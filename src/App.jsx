// Importing necessary components and hooks
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Project from "./components/Project"
import Checklist from "./components/Checklist"
import Icons from "./components/Icons"
import Clock from "./components/Clock"
import React, { useState } from "react"
import DesktopIconsData from "./data/DesktopIconsData"
import PortfolioData from "./data/PortfolioData"
import PortfolioIcon from "./components/PortfolioIcon"
import ProjectData from "./data/ProjectData"
import Contact from "./components/Contact"

// Defining the main App component
const App = () => {
  // State hooks for managing desktop and portfolio windows, and selected project ID
  const [desktopWindows, setdesktopWindows] = useState(DesktopIconsData)
  const [portfolioWindows, setPortfolioWindows] = useState(PortfolioData)
  const [selectedProjectId, setSelectedProjectId] = useState(null)

  // Function to toggle visibility of portfolio windows
  const togglePortfolioWindows = (id) => {
    setSelectedProjectId(id)
    setPortfolioWindows(prevPortfolioWindows => {
      return prevPortfolioWindows.map((portfolioWindow) =>{
        if (portfolioWindow.id === id){
          console.log(portfolioWindow.clicked)
        }
        return portfolioWindow.id === id ? {...portfolioWindow, clicked: !portfolioWindow.clicked} : portfolioWindow
      })
    })
  }

  // Function to toggle visibility of desktop windows
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

  // Finding specific windows based on their ID
  const portfolioWindow = desktopWindows.find(desktopWindow => desktopWindow.id === 4)
  const contactWindow = desktopWindows.find(desktopWindow => desktopWindow.id === 2)
  const aboutWindow = desktopWindows.find(desktopWindow => desktopWindow.id === 1)
  const projectWindow = portfolioWindows.find(portfolioWindow => portfolioWindow.id === selectedProjectId)

  // Finding the selected project data
  const selectedProject = ProjectData.find(project => project.id === selectedProjectId)

  // Mapping desktop icons to components
  const desktopIcons = DesktopIconsData.map(icon => {
    return (
      <Icons
        key={icon.id}
        id={icon.id}
        iconPng={icon.iconPng}
        altText={icon.altText}
        iconText={icon.iconText}
        link={icon.link}
        onIconClick={() => toggleDesktopWindows(icon.id)}
      />
    )
  })

  // Mapping portfolio icons to components
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

  // Conditional rendering for the selected project component
  const portfolioProject = selectedProject ? (
    <Project
      id={selectedProject.id}
      projectTitle={selectedProject.projectTitle}
      projectImage={selectedProject.projectImage}
      tags={selectedProject.tags}
      bodyText={selectedProject.bodyText}
      website={selectedProject.website}
      github={selectedProject.github}
      onClose={() => togglePortfolioWindows(selectedProjectId)}
    />
  ) : null

  // JSX for rendering the App UI
  return (
    <div className="desktop-container">
      <div className="upper-desktop-row">
        <div className="icons-component">
          <section className="container--small-width">
            <section className="all-icons-group">
              {desktopIcons}
            </section>
          </section>
        </div>
        {contactWindow && contactWindow.clicked &&
      (
        <div className={`contact-component ${contactWindow.clicked ? 'open-animation' : 'close-animation'}`}>
          <Contact
          onClose={() => toggleDesktopWindows(contactWindow.id)}
          />
        </div>
      )
      }
        {portfolioWindow && portfolioWindow.clicked && 
          (<div className={`portfolio-component ${portfolioWindow.clicked ? 'open-animation' : 'close-animation'}`}>
            <Portfolio
              portfolioIcon={portfolioIcon}
              onClose={() => toggleDesktopWindows(portfolioWindow.id)}
            />
          </div>
        )}
        {projectWindow && projectWindow.clicked && (
          <div className={`project-component ${projectWindow.clicked ? 'open-animation' : 'close-animation'}`}>
            {portfolioProject}
          </div>
        )}
        {aboutWindow && aboutWindow.clicked && (
          <div className={`about-component ${aboutWindow.clicked ? 'open-animation' : 'close-animation'}`}>
            <About
              onClose={() => toggleDesktopWindows(aboutWindow.id)}
            />
          </div>
        )}
      </div>
      <div className="bottom-desktop-row">
        <div className="checklist-component">
          <Checklist/>
        </div>
        <div className="clock-component">
          <Clock/>
        </div>
      </div>
    </div>
  )
}

// Exporting the App component for use in other parts of the application
export default App
