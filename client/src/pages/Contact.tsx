import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (

    <div>
      <div className="inside-banner">
        <div className="container">
          <span className="pull-right"><a href="#">Home</a> / Contact Us</span>
          <h2>Contact Us</h2>
        </div>
      </div>

      <div className="container">
        <div className="spacer">
          <div className="row contact">
            <div className="col-lg-6 col-sm-6 ">


              <input type="text" className="form-control" placeholder="Full Name" />
              <input type="text" className="form-control" placeholder="Email Address" />
              <input type="text" className="form-control" placeholder="Contact Number" />
              <textarea rows={6} className="form-control" placeholder="Message"></textarea>
              <button type="submit" className="btn btn-success" name="Submit">Send Message</button>




            </div>
            <div className="col-lg-6 col-sm-6 ">
              <div className="well"><iframe width="100%" height="300" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Pulchowk,+Patan,+Central+Region,+Nepal&amp;aq=0&amp;oq=pulch&amp;sll=37.0625,-95.677068&amp;sspn=39.371738,86.572266&amp;ie=UTF8&amp;hq=&amp;hnear=Pulchowk,+Patan+Dhoka,+Patan,+Bagmati,+Central+Region,+Nepal&amp;ll=27.678236,85.316853&amp;spn=0.001347,0.002642&amp;t=m&amp;z=14&amp;output=embed"></iframe></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact