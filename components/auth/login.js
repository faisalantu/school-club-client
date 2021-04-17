import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import * as actions from '../../store/auth/action';

function login(props) {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState("");

  //setting up JWT to localStorage
  // useEffect(() => {
  //   if (token && localStorage) {
  //     console.log(token);
  //     localStorage.setItem("token", token);
  //   }
  // }, [token]);

  const handleInputValue = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  // async function handleSubmit(e) {
    
  //   e.preventDefault();
  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     const response = await axios.post(
  //       "http://localhost:5000/api/auth",
  //       inputValues,
  //       config
  //     );
  //     console.log(response);
  //     setToken(response.data.token);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  function handleSubmit(e) {
    const {email , password} = inputValues;
    props.login(email , password)
    e.preventDefault();
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className=' max-w-lg sm:w-8/12 md:w-7/12 lg:w-5/12  text-center py-5 bg-white rounded-lg p-5'>
        <form onSubmit={handleSubmit} className=' mx-2 sm:mx-5 md:mx-10'>
          <h1 className='text-xl font-light text-gray-800 sm:text-2xl'>
            Login to your account
          </h1>
          <p className='text-sm text-gray-500'>
            Dont have an account ?
            <Link href='/signup'>
              <a className='text-blue-700'> Register</a>
            </Link>
          </p>
          <div className='mt-8'>
            <input
              className='mt-4 w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
              type='text'
              placeholder='email'
              required
              name='email'
              onChange={handleInputValue}
            />
            <input
              className='mt-4 w-full rounded-lg border border-gray-400 bg-transparent py-2 px-3 text-grey-darkest outline-none'
              type='password'
              placeholder='password'
              required
              minLength='6'
              name='password'
              onChange={handleInputValue}
            />

            <div className='flex w-full mt-4 mb-5'>
              <button
                type='submit'
                className='py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
              >
                login
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
      login: (email, password) => dispatch(actions.login(email, password)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(login);
