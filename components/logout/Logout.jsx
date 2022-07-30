import * as React from 'react'
import "./logout.scss"
import { useDispatch, useSelector } from "react-redux";
import {logout} from "../../services/redux/userSlice.js"

const Logout = () => {




  return (
    <div onClick={signOut} className='logout'>
    </div>
  )
}

export default Logout