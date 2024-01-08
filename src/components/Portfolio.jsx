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
            {props.portfolioIcon}
        </section>    
        </main>
    </section>
    </>
  )
}

export default Portfolio