 import {createSlice} from "@reduxjs/toolkit"
import {useSelector} from "react-redux"


 export const userSlice = createSlice({
    name:'user',


    initialState:{
        userid:"",
        username:"",
        userPhoto:"",
        loggedIn:false,

    },
    reducers:{

login: (state,action)=>{

state.user = action.payload;
},


// instead of using localStorage to get user data when user progresses through app(changing urls),
//we could just make a function that returns the state data. we could dispatch this function amd get the data.this would not be a security rish

//retriveState()



// note that calling the logout reducer will automatically reset/clear the local storage
logout:(state)=>{

    // you need to manually reset the user state by setting all keys to null or false.
    //or else, it will not clear.
    const logoutState={
        userid:"",
        username:"",
        userPhoto:"",
        loggedIn:false,
    }

    //equate the state to the logout state
state.user=logoutState;
},

},
 });


 export const  {login,logout} = userSlice.actions;

 export default userSlice.reducer