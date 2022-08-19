import React from 'react'

type PropertyProps = {
 properties: any
}
// image_url, name, location, type, price, description

const Property = (props: PropertyProps) => {
 const {properties} = props
  return (
    <>
    {properties.map((el: any) => {
     return (
      <div className="card" style={{width: '18rem'}}>
        <img src={el.img_url} alt="property image" />
        <div className="card-body">
          <h5 className="card-title">{el.name}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{el.price}</li>
            <li className="list-group-item">{el.type}</li>
            <li className="list-group-item">{el.description}</li>
          </ul>
        </div>
      </div>
     )
    })}
    </>
  )
}

export default Property