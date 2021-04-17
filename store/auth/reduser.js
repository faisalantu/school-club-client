import * as actionsType from '../../store/actionsType';
export const initialState_auth = {
  token: null,
};

const login = (state, action) => {
  return {...state, 
      token: action.token,
    };

};

const authLogout = (state, action) => {
  return {...state, token: null} ;
};

const reducer = ( state = initialState_auth, action ) => {
  switch ( action.type ) {
      case actionsType.LOGOUT: return authLogout(state, action);
      case actionsType.LOGIN: return login(state, action);
      default:
          return state;
  }
};
export default reducer;




// import { countActionTypes } from './action'

// const countInitialState = {
//   count: 0,
// }

// export default function reducer(state = countInitialState, action) {
//   switch (action.type) {
//     case countActionTypes.ADD:
//       return Object.assign({}, state, {
//         count: state.count + 1,
//       })
//     default:
//       return state
//   }
// }