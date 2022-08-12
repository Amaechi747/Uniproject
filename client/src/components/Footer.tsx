import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="footer">

      <div className="container">



        <div className="row">
          <div className="col-lg-3 col-sm-3">
            <h4>Information</h4>
            <ul className="row">
              <li className="col-lg-12 col-sm-12 col-xs-3"><a href="about.php">About</a></li>
              <li className="col-lg-12 col-sm-12 col-xs-3"><a href="agents.php">Agents</a></li>
              <li className="col-lg-12 col-sm-12 col-xs-3"><a href="blog.php">Blog</a></li>
              <li className="col-lg-12 col-sm-12 col-xs-3"><a href="contact.php">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-sm-3">
            <h4>Newsletter</h4>
            <p>Get notified about the latest properties in our marketplace.</p>
            <form className="form-inline" role="form">
              <input type="text" placeholder="Enter Your email address" className="form-control" />
              <button className="btn btn-success" type="button">Notify Me!</button></form>
          </div>

          <div className="col-lg-3 col-sm-3">
            <h4>Follow us</h4>
            <a href="#"><img src="images/facebook.png" alt="facebook" /></a>
            <a href="#"><img src="images/twitter.png" alt="twitter" /> </a>
            <a href="#"><img src="images/linkedin.png" alt="linkedin" /></a>
            <a href="#"><img src="images/instagram.png" alt="instagram " /></a>
          </div>

          <div className="col-lg-3 col-sm-3">
            <h4>Contact us</h4>
            <p><b>Bootstrap Realestate Inc.</b></p><br />
            <span className="glyphicon glyphicon-map-marker"></span> 8290 Walk Street, Australia <br />
            <span className="glyphicon glyphicon-envelope"></span> hello@bootstrapreal.com<br />
            <span className="glyphicon glyphicon-earphone"></span> (123) 456-7890
          </div>
        </div>
        <p className="copyright">Copyright 2013. All rights reserved.	</p>


      </div>
    </div>
  )
}

export default Footer