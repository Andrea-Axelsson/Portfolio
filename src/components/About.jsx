function About(props) {

  const createMarkup = () => {
    return { __html: props.bodyText };
  };

  return (
    <>
    <section className="window">
        <header className="window__top bg--yellow">
            <h3 className="window__title">{props.titleText}</h3>
            <i className="fa-solid fa-x" onClick={props.onClose}></i>
        </header>
        <main className="window__body bg--pink window__body--big-height">
          <div className="image-div">
          <img className="image-sticker1" src="/assets/flower.png"/>
          <img className="image-sticker2" src="/assets/flower3.png"/>
          </div>
                

                <h3 className="window__title">Andrea Axelsson
                <br></br>Front end developer</h3>
                <p className="body-text" dangerouslySetInnerHTML={createMarkup()}>
             
                </p>
        </main>
    </section>
    </>
  )
}

export default About