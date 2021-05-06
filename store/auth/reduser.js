import {LOGIN, LOGOUT ,SAVE_USER} from '../../store/actionsType';
export const initialState_auth = {
  token: null,
  user: null,
};

const login = (state, action) => {
  return {...state, 
      token: action.token,
    };
};
const saveUser = (state, action) => {
  return {...state, 
    user: action.user,
    };
};
const authLogout = (state, action) => {
  return {...state, token: null ,user: null,} ;
};

const reducer = ( state = initialState_auth, action ) => {
  switch ( action.type ) {
      case LOGOUT: return authLogout(state, action);
      case LOGIN: return login(state, action);
      case SAVE_USER: return saveUser(state, action);
      default:
          return state;
  }
};
export default reducer;

