import React, {useState} from "react"
const Checklist = () => {

    const [checkboxes, setCheckboxes] = useState([

        {id: 1, name: "checklist", value: "CV", label: "Läs mitt CV", checked: false},
        {id: 2, name: "checklist", value: "Besök portfolio", label: "Besök 2 portfolio projekt", checked: false},
        {id: 3, name: "checklist", value: "Om Mig", label: "Läs Om Mig", checked: false},
        {id: 4, name: "checklist", value: "LIA", label: "Kontakta mig för att prata om LIA", checked: false}
    ])

    const handleOnChange = (id) => {
        setCheckboxes((prevCheckboxes) =>
            prevCheckboxes.map((checkbox) => 
                checkbox.id === id ? { ...checkbox, checked: !checkbox.checked} : checkbox
            )
        )
        console.log("clicked on checkbox")
    }

  return (
    <>
    <section className="window container--small-width">
        <header className="window__top bg--yellow">
            <h3 className="window__title">Checklist</h3>
            {/* <i className="fa-solid fa-x"></i> */}
        </header>
        <main className="window__body window__body--small-height bg--beige">
            {checkboxes.map((checkbox)=>
            <div className="checklist-item" key={checkbox.id}>
            <input
            className="checkbox"
            type="checkbox"
            id={checkbox.id}
            name={checkbox.name}
            value={checkbox.value}
            checked={checkbox.checked}
            onChange={() => handleOnChange(checkbox.id)}
            />
            <p className="body-text">{checkbox.label}</p>
        </div>
            
            )}
            

            
            
            
        </main>
    </section>
    </>
  )
}

export default Checklist




/* <div className="checklist-item">
                <input
                className="checkbox"
                type="checkbox"
                id="1"
                name="Do2"
                value="toDo2"
                checked={isChecked}
                onChange={handleOnChange}
                />
                <p className="body-text">Besök 2 portfolio projekt</p>
            </div>

            <div className="checklist-item">
                <input
                className="checkbox"
                type="checkbox"
                id="1"
                name="Do3"
                value="toDo3"
                checked={isChecked}
                onChange={handleOnChange}
                />
                <p className="body-text">Läs Om Mig</p>
            </div>

            <div className="checklist-item">
                <input
                className="checkbox"
                type="checkbox"
                id="1"
                name="Do4"
                value="toDo4"
                checked={isChecked}
                onChange={handleOnChange}
                />
                <p className="body-text">Kontakta mig för att prata om LIA</p>
            </div> */