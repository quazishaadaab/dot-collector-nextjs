


const retriveUserState=()=>{
const data_unparsed = window.localStorage.getItem('persist:root')
const data_parsed = JSON.parse(data_unparsed)
const user_data = JSON.parse(data_parsed?.user)
return user_data ;

}


export default retriveUserState