import { BUY_CAKE } from "./cakeType"

const cakeState={
    numberOfCAkes:10
}
const cakeReducer=(state=cakeState,action )=>{
    switch(action.type){
        case BUY_CAKE:
            return{
                numberOfCAkes:state.numberOfCAkes-1
            }
            break;
        default:
            return state;
            break;
    }
}
export default cakeReducer;