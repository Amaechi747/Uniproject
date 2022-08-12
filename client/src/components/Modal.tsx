import React from 'react'

type Props = {}

const Modal = (props: Props) => {
  return (
   <div id="loginpop" className="modal fade">
   <div className="modal-dialog">
     <div className="modal-content">
       <div className="row">
         <div className="col-sm-6 login">
         <h4>Login</h4>
           <form className="" role="form">
         <div className="form-group">
           <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
           <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Enter email" />
         </div>
         <div className="form-group">
           <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
           <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
         </div>
         <div className="checkbox">
           <label>
             <input type="checkbox" /> Remember me
           </label>
         </div>
         <button type="submit" className="btn btn-success">Sign in</button>
       </form>          
         </div>
         <div className="col-sm-6">
           <h4>New User Sign Up</h4>
           <p>Join today and get updated with all the properties deal happening around.</p>
           <button type="submit" className="btn btn-info" >Join Now</button>
         </div>
 
       </div>
     </div>
   </div>
 </div>
  )
}

export default Modal