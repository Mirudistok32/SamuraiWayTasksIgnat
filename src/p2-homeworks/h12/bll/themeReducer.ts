type InitStateType = {
    currentTheme: string
}
const initState: InitStateType = {
    currentTheme: ''
};

export const themeReducer = (state = initState, action: ChangeThemeCType): InitStateType => { // fix any
    switch (action.type) {
        case "HW12/CHANGE_THEME": {
            return { ...state, currentTheme: action.payload };
        }
        default: return state;
    }
};
type ChangeThemeCType = {
    type: "HW12/CHANGE_THEME",
    payload: string
}
export const changeThemeC = (theme: string): ChangeThemeCType => ({ type: "HW12/CHANGE_THEME", payload: theme }); 