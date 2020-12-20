import {OPEN_MODAL, CLOSE_MODAL, SEARCH_ENTITIES, SEARCH_ASYNC_ENTITIES, IS_LOADING} from '../actios-types/index';


export function openModal(mediaId){
    return {
        type: OPEN_MODAL,
        payload: {
          mediaId: mediaId
        }
    }
};

export function closeModal(){
    return {
        type: CLOSE_MODAL,
    }
};

export function searchEntities(query){
    return {
        type: SEARCH_ENTITIES,
        payload: {
            query: query
          }
    }
};

export function searchAsyncEntities(query){
    return (dispatch) => {
        // fetch('https').then(()=> { dispatch(searchEntities(query)); })
        // XHR
        // trae
        dispatch(isLoading(true));

        setTimeout(() => {
            dispatch(searchEntities(query));
            dispatch(isLoading(false));
        }, 5000);
    } 
};

export function isLoading(jui){
    return {
        type : IS_LOADING,
        payload: {
            value: jui
        }
    }
}