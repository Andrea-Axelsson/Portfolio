const Icons = (props) => {
  return (
    <>
    <a href={props.link} target="_blank">
      <article className="icon-group" onClick={props.onIconClick}>
        <img className="icon" src={`/src/assets/${props.iconPng}`} alt={props.altText}/>
        <p className="body-text">{props.iconText}</p> 
      </article>
    </a>
            
    </>
  )
}
export default Icons
