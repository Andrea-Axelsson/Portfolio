const Icons = (props) => {
  return (
    <>
            <article className="icon-group" onClick={props.onIconClick}>
                <img className="icon" src={`/src/assets/${props.iconPng}`} alt={props.altText}/>
                <p className="body-text">{props.iconText}</p> 
            </article>
    </>
  )
}
export default Icons
