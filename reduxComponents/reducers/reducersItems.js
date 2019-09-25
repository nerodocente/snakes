export function hasErrored(state = false, action) {
   switch(action.type) {
      case 'ERORR':
        return action.error;

      default:
         return state;
   }
}

export function itemsIsLoading(state = false, action) {
   switch(action.type) {
       case 'LOADING':
         return action.isLoading;

       default:
          return state;
   }
}

export function items(state = [], action) {
   switch(action.type) {
      case 'FETCH_DATA_SUCCESS':
        return action.items;

      default:
         return state; 
   }
}