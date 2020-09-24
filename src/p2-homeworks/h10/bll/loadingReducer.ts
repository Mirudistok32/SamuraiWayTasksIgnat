const initState = {
    isLoading: false
};

type InitialStateType = typeof initState
type ActionsType = LoadingACType

export const loadingReducer = (state = initState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "HW10/LOADING": {
            return { ...state, ...action.payload };
        }
        default: return state;
    }
};

type LoadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => ({ type: "HW10/LOADING", payload: { isLoading } } as const); 