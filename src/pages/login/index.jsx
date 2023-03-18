import React from 'react'

const Login = () => {

  const handleSubmit = () => {
    const form = document.getElementById('form')
    alert(form.username.value)
  }

  return (
    <>
        <form id='form' onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor="username"> Username : 
                <input id='username' name='username' type="text" placeholder='username' />
            </label>
            <label htmlFor="password"> Password :  
                <input id='password' name='password' type="password" placeholder='password' />
            </label>
            <button type='submit' onSubmit={handleSubmit}>Login</button>
        </form>
    </>
  )
}

export default Login