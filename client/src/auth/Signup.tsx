import React, { useState } from 'react'
import axios from "axios"
import swal from "sweetalert"
import validator from "validator"

const Signup: React.FC = (props) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirm: '',
    address: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value.trim() })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { firstName, lastName, email, phone, password, passwordConfirm, address } = formData
    if (password !== passwordConfirm) {
      swal("Error", "Passwords do not match", "error")
    } else {
      axios.post('/api/v1/auth/signup', { firstName, lastName, email, phone, password, passwordConfirm, address })
        .then(res => {
          swal("Success", "You have successfully signed up", "success")
        }).catch(err => {
          swal("Error", "Something went wrong", "error")
        }
        )
    }
  }

  return (
    <div className="container" style={{width: '50%', padding: '5rem 0'}}>
      <h3>Sign Up</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter First Name" onChange={(e) => handleChange(e)} value={formData.firstName} name="firstName" />
        </div>
        {formData.firstName.length < 3 ?
          <p style={{ color: 'red' }}>First Name cannot be less than 3 Characters</p> : null
        }
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Enter Last Name" onChange={(e) => handleChange(e)} value={formData.lastName} name="lastName" />
        </div>
        {formData.lastName.length < 3 ?
          <p style={{ color: 'red' }}>Last Name cannot be less than 3 Characters</p> : null
        }
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput3" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="Enter Email" onChange={(e) => handleChange(e)} value={formData.email} name="email" />
        </div>
        {formData.email.length === 0 ? <p style={{ color: 'red' }}>Email cannot be empty</p> :
          formData.email.length > 0 && validator.isEmail(formData.email) ? <p style={{ color: 'green' }}>Valid Email</p> : <p style={{ color: 'red' }}>Please enter a valid email address</p>
        }
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput4" className="form-label">Phone</label>
          <input type="number" className="form-control" id="exampleFormControlInput4" placeholder="Enter Phone Number" onChange={(e) => handleChange(e)} value={formData.phone} name="phone" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput5" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleFormControlInput5" placeholder="Enter Password" onChange={(e) => handleChange(e)} value={formData.password} name="password" />
        </div>
        {
          formData.password.length > 8 ?
            <p style={{ color: 'green' }}>Password is ok</p> :
            formData.password.length === 0 ? <p style={{ color: 'red' }}>Password cannot be empty</p> :
              <p style={{ color: 'orange' }}>Must be at least 8 characters</p>
        }
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput6" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="exampleFormControlInput6" placeholder="Enter Confirm Password" onChange={(e) => handleChange(e)} value={formData.passwordConfirm} name="passwordConfirm" />
        </div>
        {
          formData.password.length != formData.passwordConfirm.length ?
            <p style={{ color: 'red' }}>Confirm Password and Password must match</p> :
            formData.passwordConfirm.length === 0 ? <p style={{ color: 'red' }}>Confirm Password cannot be empty</p> :
              <p style={{ color: 'green' }}>Match</p>
        }
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput7" className="form-label">Address</label>
          <input type="text" className="form-control" id="exampleFormControlInput7" placeholder="Enter Address" onChange={(e) => handleChange(e)} value={formData.address} name="address" />
        </div>
        <button className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup