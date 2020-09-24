export const homeWorkReducer = (state: any, action: any): any => {
    switch (action.type) {
        case "sort": {

            let copyState = [...state]

            switch (action.payload) {
                case "up": {
                    return copyState.sort((a, b) => {
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0
                    })
                }
                case "down": {
                    return copyState.sort((a, b) => {
                        if (a.name > b.name) {
                            return -1;
                        }
                        return 0
                    })
                }
                default: return copyState
            }
        }
        case "check": {
            let copyState = [...state]
            return copyState.filter(i => i.age > action.payload).sort((a, b) => a.age - b.age)
        }
        default: return state
    }
};