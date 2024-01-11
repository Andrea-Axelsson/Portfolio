const Contact = (props) => {
  return (
    <>
    <section className="window container--small-width">
        <header className="window__top bg--yellow">
            <h3 className="window__title">Kontakt</h3>
            <i className="fa-solid fa-x" onClick={props.onClose}></i>
        </header>
        <main className="window__body window__body--small-height bg--beige">
            <ul>
                <a href="mailto:hello@andreaaxelsson.com"><li className="li-mail">hello@andreaaxelsson.com</li></a>

                <a href="tel:0705 - 10 87 58"><li className="li-phone">0705 - 10 87 58</li></a>


            </ul>
        </main>
    </section>
    </>
  )
}

export default Contact