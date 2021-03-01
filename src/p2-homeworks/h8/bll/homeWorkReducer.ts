type stateType=Array<{_id: number, name: string, age: number}>

export const homeWorkReducer = (state: stateType, action: ActionsType): stateType=> {
    switch (action.type) {
        case "sort": {
switch (action.payload){
    case "up":{
        state.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }

            return 0;
        })
        return [...state]
    }
    case "down":{
        state.sort(function (a, b) {
            if (a.name < b.name) {
                return 1;
            }
            if (a.name > b.name) {
                return -1;
            }

            return 0;
        })
        return [...state]
    }
    default: return state
}

        }
        case "check": {

            return state.filter(p => p.age >=action.payload)
        }
        default: return state
    }
};


export type Chek18ActionType = {
    type: "check",
    payload: 18
   }
export type SortActionType = {
    type: "sort",
    payload:"up"|"down"
}
type ActionsType = Chek18ActionType|SortActionType

