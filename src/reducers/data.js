import data from '../schemas/index';
import {fromJS} from 'immutable';
import {SEARCH_ENTITIES} from '../actios-types/index';

 const initialState = fromJS({ 
         entities: data.entities,
         categories: data.result.categories,
         search: ''
 });

function reducer(state = initialState, action){
   switch(action.type){
       case SEARCH_ENTITIES: {
        //   let result = [];
        //   if(action.payload.query){
        //         // action.payload.query
        //         // buscamos en el store(state) la cancion que coincide con la query 
        //        const list = state.data.categories[2].playlist;
        //        result = list.filter((item) => {
        //            return item.author.includes(action.payload.query)
        //        });
        //   }; 
        //   return {
        //       ...state, 
        //       search: result,
        //       jui: 'Suzdalenko Alexei'
        //   };
        return state.set('search', action.payload.query);
       }
       default: 
            return state;
   } 
};

export default reducer;