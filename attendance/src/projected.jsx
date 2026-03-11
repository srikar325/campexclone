import {Navigate} from "react-router-dom"
function Protected ({islogged,children}){
    if(!islogged){
        return <Navigate to="/signup"/>
    }else{
        return children
    }

}
    export default Protected;
