import React from 'react'
import '../styles/Wrapper.css'
import { Link } from 'react-router-dom'

function InputWrapper() {
  return (
    <>
      <div class="kotaweb">
        <input type="text" placeholder="Enter your email" />
      <Link to='/about'>
        <button >Get Started</button>
      </Link>
    </div>
    </>
  )
}

export default InputWrapper