import React, { useState } from 'react'
import axios from "axios"
import swal from "sweetalert"
import validator from "validator"

type Props = {}

const Signin = (props: Props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { email, password } = formData

    axios.post('/api/v1/auth/signin', { email, password })
      .then(res => {
        swal("Success", "You have successfully signed in", "success")
      }).catch(err => {
        swal("Error", "Something went wrong", "error")
      }
      )

  }

  return (
    <div className="container" style={{width: '50%', padding: '5rem 0'}}>
      <h3>Sign In</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email" onChange={(e) => handleChange(e)} value={formData.email} name="email" />
        </div>
        { formData.email.length === 0 ? <p style={{color: 'red'}}>Email cannot be empty</p> :
          formData.email.length > 0 && validator.isEmail(formData.email) ? <p style={{color: 'green'}}>Valid Email</p> : <p style={{color: 'red'}}>Please enter a valid email address</p>
        }
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleFormControlInput2" placeholder="Enter Password" onChange={(e) => handleChange(e)} value={formData.password} name="password" />
        </div>
        {
          formData.password.length > 8 ?
            <p style={{ color: 'green' }}>Password is ok</p> :
            formData.password.length === 0 ? <p style={{ color: 'red' }}>Password cannot be empty</p> :
              <p style={{color: 'orange'}}>Must be at least 8 characters</p>
        }
        <button className="btn btn-primary">Sign In</button>
      </form>
    </div>
  )
}

export default Signin