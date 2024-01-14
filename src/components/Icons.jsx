const Icons = (props) => {

  const handleButtonClick = () => {
    props.onIconClick()
    props.scroll()
}

  return (
    <>
    <a href={props.link} target="_blank">
      <article className="icon-group" onClick={handleButtonClick}>
        <img className="icon" src={`/src/assets/${props.iconPng}`} alt={props.altText}/>
        <p className="body-text">{props.iconText}</p> 
      </article>
    </a>
            
    </>
  )
}
export default Icons
