import React, { useReducer } from 'react'

const UseReduceHook = () => {

    
  const initial = {
    name : ""
  }

  const reducer = (state, action) =>{
    // console.log(state,action)
    // if(action.type === "Name"){
    //   return { ...state ,name :action.payload}
    // }else{
    //   return state
    // }
    switch (action.type) {
      case "Name": {return action.payload};
    
            
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer,initial)

  console.log(state,"................. initial")

//   useEffect(()=>{

//     dispatch({type : "Name", payload:"Ram"})

//   },[])

    const handleChange=()=>{
        dispatch({type : "Name", payload:"Ram"})

    }
  

  
  console.log("after dispatch")
  console.log(state,"................. initial")
  return (
    <div>


{/* <h1>{state}</h1> */}
        <button onClick={handleChange}>Click me</button>
      
    </div>
  )
}

export default UseReduceHook
