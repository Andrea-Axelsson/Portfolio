// Importing necessary components and hooks
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Project from "./components/Project"
import Checklist from "./components/Checklist"
import Icons from "./components/Icons"
import Clock from "./components/Clock"
import React, { useRef, useState, useEffect } from "react"
import DesktopIconsData from "./data/DesktopIconsData"
import PortfolioData from "./data/PortfolioData"
import PortfolioIcon from "./components/PortfolioIcon"
import ProjectData from "./data/ProjectData"
import Contact from "./components/Contact"
import AboutData from "./data/AboutData"

// Defining the main App component
const App = () => {
  // State hooks for managing desktop and portfolio windows, and selected project ID
  const [desktopWindows, setdesktopWindows] = useState(DesktopIconsData)
  const [portfolioWindows, setPortfolioWindows] = useState(PortfolioData)
  const [selectedProjectId, setSelectedProjectId] = useState(null)
  const [triggerScroll, setTriggerScroll] = useState(null)

  const [language, setLanguage] = useState("Swe");

  const changeLanguage = (id) => {
    setLanguage(() => {
      if (id === 1){
        return "Swe";
      } else if (id === 2){
        return "Eng";
      }
    });
  }

console.log(language)
  

const updateWindows = (id, stateSetter, clickedState) => {
  stateSetter(prevWindows => {
    return prevWindows.map((window) => {
      if(window.id === id){
        console.log(window.clicked)
      }
      return window.id===id ? {...window, clicked: clickedState} : window
    })
  })
}

const openPortfolioWindows = (id) => {
  setSelectedProjectId(id)
  updateWindows(id, setPortfolioWindows, true)
}

const closePortfolioWindows = (id) => {
  setSelectedProjectId(id)
  updateWindows(id, setPortfolioWindows, false)
}

const openDesktopWindows = (id) => {
  updateWindows(id, setdesktopWindows, true)
  //scrollto(destination)
}

const closeDesktopWindows = (id) => {
  updateWindows(id, setdesktopWindows, false)
}



   // Finding specific windows based on their ID
   const portfolioWindow = desktopWindows.find(desktopWindow => desktopWindow.id === 4)
   const contactWindow = desktopWindows.find(desktopWindow => desktopWindow.id === 2)
   const aboutWindow = desktopWindows.find(desktopWindow => desktopWindow.id === 1)
   const projectWindow = portfolioWindows.find(portfolioWindow => portfolioWindow.id === selectedProjectId)
 
   // Finding the selected project data
   const selectedProject = ProjectData.find(project => project.id === selectedProjectId)

   
  const scrollToElement = (windowId) => {
    setTriggerScroll(windowId)
  }

  const scrollToProjectWindows = () => {
    scrollToElement(3);
  };

  const portfolioRef = useRef()
  const contactRef = useRef()
  const aboutRef = useRef()
  const projectRef = useRef()

  const windowRefs = {
    1: aboutRef,
    2: contactRef,
    3: projectRef,
    4: portfolioRef,
  }

  useEffect(() => {
    if (triggerScroll && windowRefs[triggerScroll] && windowRefs[triggerScroll].current) {
      windowRefs[triggerScroll].current.scrollIntoView({behavior: "smooth", block: "center"})
      setTriggerScroll(null)
    }
  }, [triggerScroll])


  // Mapping desktop icons to components
  const desktopIcons = DesktopIconsData.map(icon => {
    const iconText = language === "Swe" ? icon.iconTextSwe : icon.iconTextEng
    return (
      <Icons
        key={icon.id}
        id={icon.id}
        iconPng={icon.iconPng}
        altText={icon.altText}
        iconText={iconText}
        link={icon.link}
        onIconClick={() => {
          openDesktopWindows(icon.id)
          scrollToElement(icon.id)
        }}
        language={language}
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
        onIconClick={() => {
          openPortfolioWindows(icon.id)
          scrollToProjectWindows(icon.id)
        }}
      />
    )
  })

  const bodyText = selectedProject && (language === "Swe" ? selectedProject.bodyTextSwe : selectedProject.bodyTextEng)
  // Conditional rendering for the selected project component
  const portfolioProject = selectedProject ? (
    
    <Project
      id={selectedProject.id}
      projectTitle={selectedProject.projectTitle}
      projectImage={selectedProject.projectImage}
      tags={selectedProject.tags}
      bodyText={bodyText}
      website={selectedProject.website}
      github={selectedProject.github}
      onClose={() => closePortfolioWindows(selectedProjectId)}
      language={language}
    />
  ) : null

  // JSX for rendering the App UI
  return (
    <div className="desktop-container">
      <div className="flags-group">
          <div onClick={() => changeLanguage(1)} ><p className="langauage-flag">🇸🇪</p></div>
          <div onClick={() => changeLanguage (2)} ><p className="langauage-flag">🇬🇧</p></div>
        </div>
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
        <div ref={contactRef}  className={`contact-component ${contactWindow.clicked ? 'open-animation' : 'close-animation'}`}>
          <Contact
          onClose={() => closeDesktopWindows(contactWindow.id)}
          titleText={language === "Swe" ? "Kontakt": "Contact"}
          />
        </div>
      )
      }
        {portfolioWindow && portfolioWindow.clicked && 
          (<div ref={portfolioRef} className={`portfolio-component ${portfolioWindow.clicked ? 'open-animation' : 'close-animation'}`}>
            <Portfolio
              portfolioIcon={portfolioIcon}
              onClose={() => closeDesktopWindows(portfolioWindow.id)}
            />
          </div>
        )}
        {projectWindow && projectWindow.clicked && (
          <div ref={projectRef} className={`project-component ${projectWindow.clicked ? 'open-animation' : 'close-animation'}`}>
            {portfolioProject}
          </div>
        )}
        {aboutWindow && aboutWindow.clicked && (
          <div ref={aboutRef} className={`about-component ${aboutWindow.clicked ? 'open-animation' : 'close-animation'}`}>
            <About
              onClose={() => closeDesktopWindows(aboutWindow.id)}
              bodyText={language === "Swe" ? AboutData.bodyTextSwe : AboutData.bodyTextEng}
              titleText={language === "Swe" ? AboutData.titleTextSwe : AboutData.titleTextEng}
            />
          </div>
        )}
      </div>
      <div className="bottom-desktop-row">
        <div className="checklist-component">
          <Checklist
          language={language}
          />
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


