import React from 'react'

const Login = () => {

  const handleSubmit = () => {
    const form = document.getElementById('form')
    const userCredential = {
      username: form.username.value,
      password: form.password.value
    }
    form.username.value = ''
    form.password.value = ''
    console.log(userCredential)
  }

  return (
    <>
        <form id='form' onSubmit={(e)=> e.preventDefault()}>
          <div>
            <label htmlFor="username"> Username : </label>
            <input id='username' name='username' type="text" placeholder='username' />
          </div>
          <div>
            <label htmlFor="password"> Password : </label>
            <input id='password' name='password' type="password" placeholder='password' />
          </div>
            <button type='submit' onClick={handleSubmit}>Login</button>
        </form>
    </>
  )
}

export default Login