export const productReducer = (state, action) => {
    // console.log("reducer receive", action.type, action.payload);
    switch (action.type) {

        case 'INITIAL_API_DATA':
            {
                return {
                    ...state, all_Data: action.payload, sneakers: false, casual: false, running: false, price: 30000, sort: '',
                    ratings: ''
                }
            }
        case 'sneakers': {
            return {
                ...state, sneakers: !state.sneakers
            }
        }
        case 'running': {
            return {
                ...state, running: !state.running
            }
        }
        case 'casual': {
            return {
                ...state, casual: !state.casual
            }
        }
        case 'PRICE_RANGE': {
            return {
                ...state, price: action.payload
            }
        }
        case 'SORT': {
            if (action.payload === "HTL") {
                return {
                    ...state, sort: action.payload
                }
            }
            else if (action.payload === "LTH") {
                return {
                    ...state, sort: action.payload
                }
            }
            else {
                return state;
            }
        }

        case "RATING": {
            return {
                ...state, ratings: action.payload
            }
        }
        case "SEARCH": {
            return {
                ...state, search: action.payload
            }
        }

        default: return state;

    }
}