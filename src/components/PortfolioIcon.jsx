import React from 'react'


function PortfolioIcon(props) {

  const handleButtonClick = () => {
    props.onIconClick()
    props.scroll()
  }
  

  return (
    <article className="icon-group" onClick={handleButtonClick}>
        <img className="icon" src={`/src/assets/${props.iconPng}`} alt={props.altText}/>
        <p className="body-text">{props.iconText}</p> 
    </article>
  )
}

export default PortfolioIcon