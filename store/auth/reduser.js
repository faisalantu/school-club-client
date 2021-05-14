import {LOGIN, LOGOUT ,SAVE_USER , SET_LOADING} from '../../store/actionsType';
export const initialState_auth = {
  token: null,
  user: null,
  isAuth:1,
  loadingData:false,
};

const login = (state, action) => {
  return {...state, 
      token: action.token,
      
    };
};

const saveUser = (state, action) => {
  return {...state, 
    user: action.user,
    isAuth:2,
    };
};
const authLogout = (state, action) => {
  return {...state, token: null ,user: null, isAuth:0 ,loadingData:false, } ;
};
const SetLoadingData = (state, action) => {
  return {...state, 
    loadingData: action.loadingData,
    };
};
const reducer = ( state = initialState_auth, action ) => {
  switch ( action.type ) {
      case LOGOUT: return authLogout(state, action);
      case LOGIN: return login(state, action);
      case SAVE_USER: return saveUser(state, action);
      case SET_LOADING:return SetLoadingData(state, action);
      default:
          return state;
  }
};
export default reducer;

