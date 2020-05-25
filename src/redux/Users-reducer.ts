
let initialState = {
   
}
type InitialStateType = typeof initialState;

const UsersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state

    }
}

type ActionsType = any



export default UsersReducer;