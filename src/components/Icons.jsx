const Icons = (props) => {
  return (
    <>
    <section className="container--small-width">
      
        
            <section className="all-icons-group">
            <article className="icon-group">
                <img className="icon" src="/src/assets/Dokument.png" alt="Icon for portfolio project"/>
                <p className="body-text">Om Mig</p> 
            </article>

            <article className="icon-group">
                <img className="icon" src="/src/assets/Mail.png" alt="Icon for portfolio project"/>
                <p className="body-text">Kontakt</p> 
            </article>

            <article className="icon-group">
                <img className="icon" src="/src/assets/Linkedin.png" alt="Icon for portfolio project"/>
                <p className="body-text">LinkedIn</p> 
            </article>
            <article onClick={props.onIconClick} className="icon-group">
                <img className="icon" src="/src/assets/Mapp.png" alt="Icon for portfolio project"/>
                <p className="body-text">Portfolio</p> 
            </article>

            <article className="icon-group">
                <img className="icon" src="/src/assets/Dokument.png" alt="Icon for portfolio project"/>
                <p className="body-text">CV</p> 
            </article>

            <article className="icon-group">
                <img className="icon" src="/src/assets/github.svg" alt="Icon for portfolio project"/>
                <p className="body-text">Github</p> 
            </article>
            </section>
            
               

    </section>
    </>
  )
}

export default Icons