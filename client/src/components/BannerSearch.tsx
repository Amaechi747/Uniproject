import React from 'react'

type Props = {}

const BannerSearch = (props: Props) => {
  return (
   <div className="banner-search">
   <div className="container"> 
     <h3>Buy, Sale & Rent</h3>
     <div className="searchbar">
       <div className="row">
         <div className="col-lg-6 col-sm-6">
           <input type="text" className="form-control" placeholder="Search of Properties" />
           <div className="row">
             <div className="col-lg-3 col-sm-3 ">
               <select className="form-control">
                 <option>Buy</option>
                 <option>Rent</option>
                 <option>Sale</option>
               </select>
             </div>
             <div className="col-lg-3 col-sm-4">
               <select className="form-control">
                 <option>Price</option>
                 <option>$150,000 - $200,000</option>
                 <option>$200,000 - $250,000</option>
                 <option>$250,000 - $300,000</option>
                 <option>$300,000 - above</option>
               </select>
             </div>
             <div className="col-lg-3 col-sm-4">
             <select className="form-control">
                 <option>Property</option>
                 <option>Apartment</option>
                 <option>Building</option>
                 <option>Office Space</option>
               </select>
               </div>
               <div className="col-lg-3 col-sm-4">
               <button className="btn btn-success" >Find Now</button>
               </div>
           </div>
           
           
         </div>
         <div className="col-lg-5 col-lg-offset-1 col-sm-6 ">
           <p>Join now and get updated with all the properties deals.</p>
           <button className="btn btn-info"   data-toggle="modal" data-target="#loginpop">Login</button>        </div>
       </div>
     </div>
   </div>
 </div>
  )
}

export default BannerSearch