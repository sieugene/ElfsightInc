
let initialState = {
   
}
type InitialStateType = typeof initialState;

const AlbumReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state

    }
}

type ActionsType = any



export default AlbumReducer;