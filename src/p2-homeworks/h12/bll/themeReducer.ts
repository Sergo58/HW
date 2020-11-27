type initStateType={
    theme:string
    background:string
}
const initState:initStateType = {
theme:'dark',
    background:'default'
};

export const themeReducer = (state = initState, action: changeThemeActionType|changeBackgroundActionType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            state.theme=action.theme
            return {...state};
        }
        case "CHANGE_BACKGROUND":{
            state.background=action.background
            return {...state}
        }
        default: return state;
    }
};
type changeThemeActionType={
    type:"CHANGE_THEME"
    theme:string
}
type changeBackgroundActionType={
    type:"CHANGE_BACKGROUND"
    background:string
}
export const changeThemeC = (e:string): {  theme: string; type: string } => {
    return {
        theme:e,
        type:"CHANGE_THEME"
    }}
    export const changeBackground = (e:string): { background: string;  type: string } => {
        return {
            background:e,

            type:"CHANGE_BACKGROUND"}


}; // fix any