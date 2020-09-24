import { type } from "os";

const initState = {
    isLoading: false
};

type InitialStateType = typeof initState
type ActionsType = LoadingACType

export const loadingReducer = (state = initState, action: ActionsType): InitialStateType => { 
    switch (action.type) {
        case "HW10/LOADING": {

            return state;
        }
        default: return state;
    }
};

type LoadingACType = ReturnType<typeof loadingAC>
export const loadingAC = () => ({ type: "HW10/LOADING", } as const); 