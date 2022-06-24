
export const setAves = (payload) => (dispatch) => {
    dispatch({
        type: "SET_AVES",
        payload
    })
}

export function ordenComunas(payload){
    return{
            type: "ORDEN_COMUNAS",
            payload
    }
}

export function ordenProvincias(payload){
    return{
            type: "ORDEN_PROVINCIAS",
            payload
    }
}


export const  ordenAlfabetico = (payload) => (dispatch) => {

   dispatch ({
        type: "ORDEN_ALFABETICO",
        payload
    })
}
