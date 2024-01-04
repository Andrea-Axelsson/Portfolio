import React, {useEffect, useState} from "react"

const Clock = () => {

  const [currentDate, setCurrentDate] = useState(new Date())

  /* 1 SECOND INTERVAL */

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setCurrentDate(new Date())
    }, 1000)
    return () => clearInterval(intervalId)
  },[])

/* DATE */

  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const day = dayNames[currentDate.getDay()]
  const month = monthNames[currentDate.getMonth()]
  const date = currentDate.getDate()
  const year = currentDate.getFullYear()

/* TIME */

  const hours = currentDate.getHours().toString().padStart(2, '0')
  const minutes = currentDate.getMinutes().toString().padStart(2, '0')

  const currentDateString = `${day} ${month} ${date} ${year}`
  const currentTime = `${hours}:${minutes}`

  return (
    <article className="clock">
        <h1 id="time" className="clock-time">{currentTime}</h1>
        <h2 id="date" className="clock-date">{currentDateString}</h2>
    </article>
  )
}

export default Clock