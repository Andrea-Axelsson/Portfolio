import React, { useState } from "react"


function Project(props) {

  const tagElements = Object.values(props.tags).map((tag, index) => (
    <div className="project-tag" key={index}>
        <p className="small-text">{tag}</p>
    </div>
))

const backgroundImage = {
  background: `url(/src/assets/${props.projectImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  width: '100%',
  height: '200px',
  marginTop: '20px'
}


  return (
    <>
    <section className="window">
        <header className="window__top bg--green">
            <h3 className="window__title">{props.projectTitle}</h3>
            <i className="fa-solid fa-x" onClick={props.onClose}></i>
        </header>
        <main className="window__body window__body--big-height bg--beige">
            
                <div style={backgroundImage} >
                <section className="project-tag-group">
                {tagElements}
                </section>     
                 
                </div> 
        <p className="body-text">{props.bodyText}</p>
        <section className="window__button-group">
            <a href={props.website} target="_blank" className="window__button">Besök Sidan</a>
            <a href={props.github} target="_blank"className="window__button">Github</a>  
        </section>
        </main>
    </section>
    </>
  )
}

export default Project