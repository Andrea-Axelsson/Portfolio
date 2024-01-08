function About(props) {
  return (
    <>
    <section className="window">
        <header className="window__top bg--yellow">
            <h3 className="window__title">Om mig</h3>
            <i className="fa-solid fa-x" onClick={props.onClose}></i>
        </header>
        <main className="window__body bg--pink window__body--big-height">
                <img className="window__about-image" src="/src/assets/avatar-andrea.jpeg" alt="Image of Me"/>

                <h3 className="window__title">Andrea Axelsson
                <br></br>Front end developer</h3>
                <p className="body-text">
                Hejsan! Va kul att du hittat hit!

                <br></br>
                <br></br>

                🎓Under min tvååriga utbildning på Digital Content Designer upptäckte jag min passion för att skapa användarvänliga och snygga digitala upplevelser. Men framför allt upptäckte jag att det var ännu mer spännande att göra designen funktionell genom programmering. Valde därför att fördjupa mig i frontendutveckling där jag både kan arbeta kreativt samt gotta ner mig i problemlösning vilket är något av det roligaste jag vet!

                <br></br>
                <br></br>

                🚀 Sedan september 2023 studerar jag Frontendutvecklare på Folkuniversitetet. Jag ser verkligen fram emot att fördjupa mina kunskaper och bidra till att skapa webbupplevelser som inte bara är visuellt tilltalande, utan också felfria och användarvänliga.
                
                <br></br>
                <br></br>

                🤓 Jag har alltid varit ivrig att lära mig nytt och kallar mig själv en "online course junkie." Jag älskar att ständigt utveckla mina färdigheter och har alltid en onlinekurs som jag fördjupar mig i när jag får en stund över. Det är en av de saker jag älskar mest med programmering - det finns alltid något nytt att lära och utforska.
                </p>
        </main>
    </section>
    </>
  )
}

export default About