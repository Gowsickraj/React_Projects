import { useReducer } from "react";


const initialState = { name: "Hitler", age: 12 }


const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            {
                return {
                    name: state.name,
                    age: state.age + 1
                }
            }
        case "CHANGED_NAME":
            {
                return {
                    name: action.nextName,
                    age: state.age
                }
            }

        default:
            throw new Error("invalid function");
    }
}

export const UseReduceHook1 = () => {



    const [state, dispatch] = useReducer(reducer, initialState);


    const handleChange = () => {
        dispatch(
            {
                type: 'INCREMENT'
            }
        )
    }


    const changeName = (e) => {
        dispatch(
            {
                type: "CHANGED_NAME",
                nextName: e.target.value
            }
        )

    }

    return (
        <>
            <input value={state.name} onChange={changeName}></input>
            <button onClick={handleChange}>Increment age</button>
            <p>Hello {state.name}. You are {state.age}</p>
        </>
    )

}