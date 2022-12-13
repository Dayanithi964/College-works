import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FunCom() {

    const[data,setdata]=useState('')
    useEffect()
    {

        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            console.log(res.data)
    })  
    }

  return (
    <div>

    </div>
  )
}

export default FunCom