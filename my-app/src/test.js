import React from 'react'
import {useParams} from "react-router-dom"

function Test() {
    const {value} = useParams();
  return (
    <div>
       value is  {value}
    </div>
  )
}

export default Test