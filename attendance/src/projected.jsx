import Signup from "./signup/signup.jsx"
function Protected ({islogged,children}){
    if(!islogged){
        return(
        <Signup/>
    )
    }else{
        return children
    }

}
    export default Protected;
