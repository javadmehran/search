import React, { useState } from 'react'
import { Icon } from 'react-icons-kit'
import{eye} from 'react-icons-kit/feather/eye'
import{eyeOff} from 'react-icons-kit/feather/eyeOff'
export default function Search() {
   
const [type,setType]=useState('password')
const [icon,setIcon]=useState(eyeOff)

    const handleClick=()=>{
        if(type==='password'){
         setType('text')
         setIcon(eye)
        }else{
            setType('password')
            setIcon(eyeOff)
        }
    }
    return (
        <div className='wrapper'>
            <div className='input-fields'>
            <span onClick={handleClick}><Icon size={20} icon={icon}/></span>
                <input type={type} />
               
            </div>
        </div>
    )
}
