import React, { useState } from 'react'
import axios from "axios"
import swal from "sweetalert"

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

  const handleSubmit = () => {
    const { email, password } = formData

    axios.post('/api/v1/auth/signin', { email, password })
      .then(res => {
        swal("Success", "You have successfully signed up", "success")
      }).catch(err => {
        swal("Error", "Something went wrong", "error")
      }
      )

  }
  return (
    <div className="container">
      <form onSubmit={() => handleSubmit()}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email" onChange={(e) => handleChange(e)} value={formData.email} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter Password" onChange={(e) => handleChange(e)} value={formData.password} />
        </div>
      </form>
    </div>
  )
}

export default Signin