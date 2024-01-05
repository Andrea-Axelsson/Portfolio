const Portfolio = (props) => {
  return (
    <>
    <section className="window container--small-width">
        <header className="window__top bg--green">
            <h3 className="window__title">Portfolio</h3>
            <i className="fa-solid fa-x" onClick={props.onClose}></i>
        </header>
        <main className="window__body window__body--small-height bg--beige">
            <section className="all-icons-group">
            
            <article className="icon-group" onClick={props.onIconClick}>
                <img className="icon" src="/src/assets/Bilder.png" alt="Icon for portfolio project"/>
                <p className="body-text">QuizzicalOOO</p> 
            </article>

            <article className="icon-group">
                <img className="icon" src="/src/assets/Bilder.png" alt="Icon for portfolio project"/>
                <p className="body-text">Quizzical</p> 
            </article>

            <article className="icon-group">
                <img className="icon" src="/src/assets/Bilder.png" alt="Icon for portfolio project"/>
                <p className="body-text">Quizzical</p> 
            </article>
            <article className="icon-group">
                <img className="icon" src="/src/assets/Bilder.png" alt="Icon for portfolio project"/>
                <p className="body-text">Quizzical</p> 
            </article>

            <article className="icon-group">
                <img className="icon" src="/src/assets/Bilder.png" alt="Icon for portfolio project"/>
                <p className="body-text">Quizzical</p> 
            </article>

            <article className="icon-group">
                <img className="icon" src="/src/assets/Bilder.png" alt="Icon for portfolio project"/>
                <p className="body-text">Quizzical</p> 
            </article>
            </section>
            
               
        </main>
    </section>
    </>
  )
}

export default Portfolio