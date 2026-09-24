import React from 'react'
import Card from './Component/Card'

const App = () => {
  return (
    <div style={{display:'flex',gap:'10px'}}>
      <Card name="Labhay" rollno="2400321540005" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeJZYbWYqftI-L0vqYrbtqb7yjZQFeKjHEbBeUDHEDA&s"/>
      <br />
      <Card name="Leepak" rollno="2400321540044" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4uXkR2fBVtkA1BhzBSdr-9IXHIDntI9dn78E1NZ9y4Q&s=10"/>
      <br />
      <Card name="Larmaan" rollno="2400321540049" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROMdZhqekwDQInpGlFsli0b_YzCIeVOQSJWVIlwvzEuw&s=10"/>
      <br />
    </div>
  )
}

export default App