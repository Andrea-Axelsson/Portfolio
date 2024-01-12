function About(props) {
  return (
    <>
    <section className="window">
        <header className="window__top bg--yellow">
            <h3 className="window__title">Om mig</h3>
            <i className="fa-solid fa-x" onClick={props.onClose}></i>
        </header>
        <main className="window__body bg--pink window__body--big-height">
          <div className="image-div">
          <img className="image-sticker1" src="/src/assets/flower.png"/>
          <img className="image-sticker2" src="/src/assets/flower3.png"/>
          </div>
                

                <h3 className="window__title">Andrea Axelsson
                <br></br>Front end developer</h3>
                <p className="body-text">
                Hej, vad kul att du har hittat till mitt lilla hörn av internet!
                <br></br>
                <br></br>
                Jag heter Andrea, studerar till Front end utvecklare och tar examen 2025.  Min resa inom programmering började med en yrkeshögskoleexamen i Digital Content Design. Det var under denna tid jag upptäckte min passion för programmering. Jag blev fascinerad av hur man kan omvandla design till fungerande, interaktiva element och möjligheten och kunna bygga vad som helst som man faktiskt kan ha nytta av.
                <br></br>
                <br></br>
                Kreativt skapande har alltid varit en stor del av mitt liv och jag finner stor glädje i att kombinera estetik med funktion. Den där känslan när en design inte bara ser bra ut, men också fungerar felfritt, är helt enkelt obeskrivlig.
                <br></br>
                <br></br>
                Jag har alltid varit ivrig att lära mig nytt och kallar mig själv en "online course junkie." Jag älskar att ständigt utveckla mina färdigheter och har alltid en onlinekurs som jag fördjupar mig i när jag får en stund över. Det är en av de saker jag älskar mest med programmering - det finns alltid något nytt att lära och utforska.
                <br></br>
                <br></br>
                När jag inte kodar eller utforskar nya webbteknologier, kan du hitta mig djupt försjunken i någon serie med Ricky Gervais, mysa med hunden, eller njuta av ett vinterbad, förutsatt att det finns en bastu i närheten. 
                <br></br>
                <br></br>
                Jag ser fram emot att använda mina kunskaper och min kreativitet för att skapa unika, användarvänliga webblösningar. Låt oss skapa något fantastiskt tillsammans!
                </p>
        </main>
    </section>
    </>
  )
}

export default About