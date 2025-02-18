// import React from 'react'
// import buy_cake from '../redux/cake/cakeType'
// import { connect } from 'react-redux'

// const CakeContainer = (props) => {
//     console.log(props)
//   return (
//     <div>
//         <h1>Num of cakes:{props.totalCakes}</h1>
//         <button onClick={props.xyz}>Buy cake</button>
//     </div>
//   )
// }
// const mapStateToProps=state=>{
//     return {
//         totalCakes:state.numOfCakes
//     }
// }
// const mapDispatchToProps=dispatch=>{
//     return{
//         xyz:()=>dispatch(buy_cake())
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(CakeC
/* import React from 'react'
import { BUY_CAKE } from '../redux/cake/cakeType'
import {buyCake} from '../redux/cake/cakeAction'
const CakeContainer = (props) => {
  return (
    <div>CakeContainer</div>
  )
}
const mapStateToProps=state=>{
    return{
        totalCakes:state.numberOfCAkes
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        xyz:()=>dispatch(buyCake())
    }
}
export default CakeContainer(mapStateToProps,mapDispatchToProps)(CakeContainer) */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BUY_CAKE } from '../redux/cake/cakeType';

import { buyCake } from '../redux/cake/cakeAction';
const CakeContainer = () => {
    let numberOfCakes = useSelector(state => state.numberOfCAkes);
    let dispatch = useDispatch();

    return (
        <div>
            <h1>Number of cakes:{numberOfCakes}</h1>
            <button onClick={() => dispatch(buyCake())}>Click here</button>
        </div>
    );
};

export default CakeContainer;