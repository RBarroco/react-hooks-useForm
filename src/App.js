//use all those inputs from the client side into the  ref={register({required: true})}  //required true asks for required field pointing to the next one that is required and is not being sended;

import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const { register, handleSubmit, errors } = useForm();
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const onSubmit = data => {
    console.log(data);
  };

  const validateUserName = async value => {
    await sleep(1000);
    if (value === 'bill') return true;

    return false;
  };

  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <label>First Name:</label>
      <input
        name="firstName"
        ref={register({ required: true, minLength: 2 })}
      />
      {errors.firstName && errors.firstName.type === 'required' && (
        <p>Field required</p>
      )}
      {errors.firstName && errors.firstName.type === 'minLength' && (
        <p>Your First Name need a minimum 2 characters</p>
      )}

      <label>Last Name:</label>
      <input name="lastName" ref={register({ required: true, minLength: 2 })} />
      {errors.lastName && errors.lastName.type === 'required' && (
        <p>Field required</p>
      )}
      {errors.lastName && errors.lastName.type === 'minLength' && (
        <p>Your First Name need a minimum 2 characters</p>
      )}

      <label>Gender</label>
      <select name="gender" ref={register({ required: true })}>
        <option value="">Select...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {errors.gender && errors.gender.type === 'required' && (
        <p>Field required</p>
      )}

      <label>Username</label>
      <input
        name="username"
        ref={register({ required: true, validate: validateUserName })}
      />
      {errors.username && errors.username.type === 'required' && (
        <p>Field required</p>
      )}

      <label>Email</label>
      <input
        name="email"
        ref={register({
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'invalid email address'
          }
        })}
      />
      {errors.email && errors.email.type === 'required' && (
        <p>Field required</p>
      )}
      {errors.email && errors.email.message && <p>Invalid email address</p>}

      <label>About you</label>
      <textarea name="aboutYou" ref={register({ required: true })} />
      {errors.aboutYou && errors.aboutYou.type === 'required' && (
        <p>Field required</p>
      )}

      <input type="submit" />
    </form>
  );
}

export default App;
