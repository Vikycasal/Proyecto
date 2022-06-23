const estado = {
    aves : [],
    comunas : []
}

function rootReducer (state = estado, action) {
    switch(action.type) {
        case "SET_AVES":
            return {
                ...state,
                aves: action.payload
            }
            case "ORDEN_COMUNA":
            let orderArray = action.payload==="asc" ? 
            state.comunas.sort(function (a,b){
                    if(a.comuna > b.comuna){
                            return 1;
                    }
                    if(b.comuna > a.comuna){
                            return -1;
                    }
                    return 0;
            }) :
            state.comunas.sort(function (a,b){
                    if(a.comuna > b.comuna){
                            return -1;
                    }
                    if(b.comuna > a.comuna){
                            return 1;
                    }
                    return 0;
            });
            return{
                    ...state,
                    recipes:orderArray
            }
        case "ORDEN_ALFABETICO":
            let alfabArr = action.payload === "A-Z" ? state.aves.sort(function (a, b) {
                if( a.name.spanish.toLowerCase() > b.name.spanish.toLowerCase()) {
                    return 1;
                };
                if( a.name.spanish.toLowerCase() < b.name.spanish.toLowerCase()) {
                    return -1;
                };
                return 0;
            }) : state.aves.sort(function (a, b) {
                if(a.name.spanish.toLowerCase() > b.name.spanish.toLowerCase()) {
                    return -1;
                };
                if( a.name.spanish.toLowerCase() < b.name.spanish.toLowerCase()) {
                    return 1;
                };
                return 0
            });
            return {
                ...state,
                aves: alfabArr
            }
            default:
                return state;
    }
}

export default rootReducer;
