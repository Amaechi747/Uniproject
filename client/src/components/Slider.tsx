import React from 'react'

type Props = {}

const Slider = (props: Props) => {
 return (
  <div className="">


   <div id="slider" className="sl-slider-wrapper">

    <div className="sl-slider">

     <div className="sl-slide" data-orientation="horizontal" data-slice1-rotation="-25" data-slice2-rotation="-25" data-slice1-scale="2" data-slice2-scale="2">
      <div className="sl-slide-inner">
       <div className="bg-img bg-img-1"></div>
       <h2><a href="#">2 Bed Rooms and 1 Dinning Room Aparment on Sale</a></h2>
       <blockquote>
        <p className="location"><span className="glyphicon glyphicon-map-marker"></span> 1890 Syndey, Australia</p>
        <p>Until he extends the circle of his compassion to all living things, man will not himself find peace.</p>
        <cite>$ 20,000,000</cite>
       </blockquote>
      </div>
     </div>

     <div className="sl-slide" data-orientation="vertical" data-slice1-rotation="10" data-slice2-rotation="-15" data-slice1-scale="1.5" data-slice2-scale="1.5">
      <div className="sl-slide-inner">
       <div className="bg-img bg-img-2"></div>
       <h2><a href="#">2 Bed Rooms and 1 Dinning Room Aparment on Sale</a></h2>
       <blockquote>
        <p className="location"><span className="glyphicon glyphicon-map-marker"></span> 1890 Syndey, Australia</p>
        <p>Until he extends the circle of his compassion to all living things, man will not himself find peace.</p>
        <cite>$ 20,000,000</cite>
       </blockquote>
      </div>
     </div>

     <div className="sl-slide" data-orientation="horizontal" data-slice1-rotation="3" data-slice2-rotation="3" data-slice1-scale="2" data-slice2-scale="1">
      <div className="sl-slide-inner">
       <div className="bg-img bg-img-3"></div>
       <h2><a href="#">2 Bed Rooms and 1 Dinning Room Aparment on Sale</a></h2>
       <blockquote>
        <p className="location"><span className="glyphicon glyphicon-map-marker"></span> 1890 Syndey, Australia</p>
        <p>Until he extends the circle of his compassion to all living things, man will not himself find peace.</p>
        <cite>$ 20,000,000</cite>
       </blockquote>
      </div>
     </div>

     <div className="sl-slide" data-orientation="vertical" data-slice1-rotation="-5" data-slice2-rotation="25" data-slice1-scale="2" data-slice2-scale="1">
      <div className="sl-slide-inner">
       <div className="bg-img bg-img-4"></div>
       <h2><a href="#">2 Bed Rooms and 1 Dinning Room Aparment on Sale</a></h2>
       <blockquote>
        <p className="location"><span className="glyphicon glyphicon-map-marker"></span> 1890 Syndey, Australia</p>
        <p>Until he extends the circle of his compassion to all living things, man will not himself find peace.</p>
        <cite>$ 20,000,000</cite>
       </blockquote>
      </div>
     </div>

     <div className="sl-slide" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1">
      <div className="sl-slide-inner">
       <div className="bg-img bg-img-5"></div>
       <h2><a href="#">2 Bed Rooms and 1 Dinning Room Aparment on Sale</a></h2>
       <blockquote>
        <p className="location"><span className="glyphicon glyphicon-map-marker"></span> 1890 Syndey, Australia</p>
        <p>Until he extends the circle of his compassion to all living things, man will not himself find peace.</p>
        <cite>$ 20,000,000</cite>
       </blockquote>
      </div>
     </div>
    </div>

    <nav id="nav-dots" className="nav-dots">
     <span className="nav-dot-current"></span>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
    </nav>

   </div>
  </div>
 )
}

export default Slider