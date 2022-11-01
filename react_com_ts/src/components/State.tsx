import React, {useState, ChangeEvent} from 'react'


const State = () => {
    const [text, setText] = useState<string | null>('testando hook')

    const handleChange = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        setText(value)
    }
  return (
    <div>
        <p>O texto é {text}</p>
        <input type="text" onChange={handleChange} />
    </div>
  )
}

export default State