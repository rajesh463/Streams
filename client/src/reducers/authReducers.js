import { SIGN_IN,SIGN_OUT } from "../actions/types";
const INTIAL_STATE = {
    isSignIn:null,
    userId:null
}

export default  (state = INTIAL_STATE,action)=>{
    switch(action.type){
        case SIGN_IN:
            return {...state,isSignIn:true,userId:action.payload};
        case SIGN_OUT:
            return {...state,isSignIn:false,userId:null};
        default:
            return state;
    }
}