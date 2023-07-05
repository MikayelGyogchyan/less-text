import {useState} from "react"

function LessText(props) {
  
  const [showLess, setShowLess] = useState(true)

  const {text, max = 55} = props

  if(text.length <= max) {
    return <span>{text}</span>
  }
  
  return (
    <span>
      {showLess ? `${text.substring(0, max)} ...` : text}
      <a href="#" onClick={(evt) => {
        evt.preventDefault()
        setShowLess(!showLess)
      }}>{showLess ? "more" : "less"}</a>
    </span>
  )
}

export default LessText

