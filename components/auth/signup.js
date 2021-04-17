import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import * as actions from '../../store/auth/action';
function signup(props) {
  const [isLogin, setIsLogin] = useState(true);
  const [password, setPassword] = useState({
    password1: "",
    password2: "",
  });
  const [inputValues, setInputValues] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    studentid: "",
  });
  //setting up JWT to localStorage
  // useEffect(() => {
  //   if (token && localStorage) {
  //     console.log(token);
  //     localStorage.setItem("token", token);
  //   }
  // }, [token]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const passwordHandleOnChange = (event) => {
    const { name, value } = event.target;
    setPassword({ ...password, [name]: value });
  };

  function submitHandler(e) {
    
    if (password.password1 === password.password2) {
      setInputValues({ ...inputValues, password: password.password1 });
      props.signup({...inputValues, password:password.password1});
    } else {
      console.log("pass word dose not match")
      setInputValues({ ...inputValues, password: "" });
    }
    // if (password.password1 === password.password2) {
    //   console.log("if ",password.password1)
    //   setInputValues({ ...inputValues, password: password.password1 });
    // } else {
    //   console.log("else")
    //   setInputValues({ ...inputValues, password: "" });
    // }

    // console.log('[pas 1 and 2]',password.password1 ," ", password.password2)
    // console.log('[inputValues ]=>', inputValues)
    // console.log('[inputValues password]=>', inputValues.password)
    // props.signup({...inputValues, password:password.password1});
    e.preventDefault();
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    // axios
    //   .post("http://localhost:5000/api/users", inputValues, config)
    //   .then((response) => {
    //     console.log(response);
    //     setToken(response.data.token);
    //   })
    //   .catch((err) => {
    //     console.log(err.response.data);
    //   });

    if (isLogin) {
      //some logic
    } else {
      //some logic
    }
  }
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className=' max-w-lg sm:w-8/12 md:w-7/12 lg:w-5/12  text-center py-5 bg-white rounded-lg p-5'>
        <form onSubmit={submitHandler} className=' mx-2 sm:mx-5 md:mx-10'>
          <h1 className='text-xl font-light text-gray-800 sm:text-2xl'>
            Create a new account
          </h1>
          <p className='text-sm text-gray-500'>
            Already have an account ?
            <Link href='/login'>
              <a className='text-blue-700'> Sign in</a>
            </Link>
          </p>
          <div className='mt-8'>
            <input
              className='w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
              type='text'
              placeholder='username'
              required
              name='username'
              onChange={handleOnChange}
            />

            <div className=' grid grid-cols-2 gap-4 mt-4'>
              <input
                className='w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
                type='text'
                placeholder='first name'
                required
                name='firstname'
                onChange={handleOnChange}
              />
              <input
                className='w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
                type='text'
                placeholder='last name'
                name='lastname'
                onChange={handleOnChange}
              />
            </div>

            <input
              className='mt-4 w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
              type='text'
              placeholder='email'
              required
              name='email'
              onChange={handleOnChange}
            />
            <input
              className='mt-4 w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
              type='password'
              placeholder='password'
              required
              minLength='6'
              name='password1'
              onChange={passwordHandleOnChange}
            />
            <input
              className='mt-4 w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
              type='password'
              placeholder='password'
              required
              minLength='6'
              name='password2'
              onChange={passwordHandleOnChange}
            />
            <input
              className='mt-4 w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
              type='number'
              placeholder='student id'
              required
              name='studentid'
              onChange={handleOnChange}
            />
            <div className='flex w-full mt-4 mb-5'>
              <button
                type='submit'
                className='py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
      token: state.auth.token,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (inputValues) => dispatch(actions.signup(inputValues)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(signup);
