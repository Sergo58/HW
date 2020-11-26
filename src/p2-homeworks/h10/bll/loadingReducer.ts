import {type} from "os";
type initStateType={
    loading:boolean
}
const initState = {
loading:false
};

export const loadingReducer = (state = initState, action: loadingActionType): initStateType => { // fix any
    switch (action.type) {
        case " LOADING": {
        state.loading=!state.loading
            return {...state} ;
        }
        default: return state;
    }
};
export type loadingActionType = {
    type: " LOADING"


}

export const loadingAC = (): loadingActionType => {
    return {
    type:" LOADING"}
};