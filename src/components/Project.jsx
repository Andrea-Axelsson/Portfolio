function Project(props) {
  return (
    <>
    <section className="window">
        <header className="window__top bg--green">
            <h3 className="window__title">{props.projectTitle}</h3>
            <i className="fa-solid fa-x" onClick={props.onClose}></i>
        </header>
        <main className="window__body window__body--big-height bg--beige">
            
                <div className="window__project-image">
                <section className="project-tag-group">
                <div className="project-tag">
                    <p className="small-text">{props.tags.tag1}</p>
                    </div>
                    <div className="project-tag">
                    <p className="small-text">{props.tags.tag2}</p>
                    </div>
                    <div className="project-tag">
                    <p className="small-text">{props.tags.tag3}</p>
                    </div>
                    <div className="project-tag">
                    <p className="small-text">{props.tags.tag4}</p>
                    </div>
                </section>     
                 
                </div> 
        <p className="body-text">{props.bodyText}</p>
        <section className="window__button-group">
            <button className="window__button">Besök Sidan</button>
            <button className="window__button">Github</button>  
        </section>
        </main>
    </section>
    </>
  )
}

export default Project