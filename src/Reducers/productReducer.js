export const productReducer = (state, action) => {
    // console.log("reducer receive", action.type, action.payload);
    switch (action.type) {

        case 'INITIAL_API_DATA':
            {
                return {
                    ...state, all_Data: action.payload, category: [], price: 30000, sort: '',
                    rating: ''
                }
            }
        case 'CATEGORY': {
            const categoryValue = action.payload;
            const currentCategoryArray = state.category;

            if (currentCategoryArray.includes(categoryValue)) {
                // If the category value is already present, remove it from the array
                const updatedCategoryArray = currentCategoryArray.filter(
                    (category) => category !== categoryValue
                );

                return {
                    ...state,
                    category: updatedCategoryArray,
                };
            } else {
                // If the category value is not present, add it to the array
                return {
                    ...state,
                    category: [...currentCategoryArray, categoryValue],
                };
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
                ...state, rating: action.payload
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