 export function hasErrored(e) {
   return {
     type: 'ERROR',
     error: e
   };
 }

 export function itemsIsLoading(load) {
   return {
      type: 'LOADING',
      isLoading: load
   }
 }

 export function fetchDataSuccess (items) {
   return {
      type: 'FETCH_DATA_SUCCESS',
      items
   }
 }


 export function fetchData(url) {
    return (dispatch) => {
      dispatch(itemsIsLoading(true));

      fetch(url)
           .then((res) => {
               if (!res.ok) {
                  throw Error(res.statusText) ;            
                }

                dispatch(itemsIsLoading(false));

                return res;
           })
       .then((res) => res.json())
       .then((items) => dispatch(fetchDataSuccess(items)))
       .catch(() => dispatch(hasErrored(true)));
    };
 }