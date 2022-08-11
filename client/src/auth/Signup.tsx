import React, { useState } from 'react'
import axios from "axios"
import swal from "sweetalert"

const Signup: React.FC = (props) => {
 const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  address: ''
 })

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target
  setFormData({ ...formData, [name]: value })
 }

 const handleSubmit = () => {
  const { firstName, lastName, email, phone, password, confirmPassword, address } = formData
  if (password != confirmPassword) {
   swal("Error", "Passwords do not match", "error")
  } else {
   axios.post('/api/v1/auth/signup', { firstName, lastName, email, phone, password, confirmPassword, address })
    .then(res => {
     swal("Success", "You have successfully signed up", "success")
    }).catch(err => {
     swal("Error", "Something went wrong", "error")
    }
    )
  }
 }



 return (
  <div className="container">
   <form onSubmit={() => handleSubmit()}>
    <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
     <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter First Name" onChange={(e) => handleChange(e)} value={formData.firstName} />
    </div>
    <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
     <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Last Name" onChange={(e) => handleChange(e)} value={formData.lastName} />
    </div>
    <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
     <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email" onChange={(e) => handleChange(e)} value={formData.email} />
    </div>
    <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
     <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Phone Number" onChange={(e) => handleChange(e)} value={formData.phone} />
    </div>
    <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
     <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter Password" onChange={(e) => handleChange(e)} value={formData.password} />
    </div>
    <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Confirm Password</label>
     <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter Confirm Password" onChange={(e) => handleChange(e)} value={formData.confirmPassword} />
    </div>
    <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
     <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Address" onChange={(e) => handleChange(e)} value={formData.address} />
    </div>

   </form>
  </div>
 )
}

export default Signup