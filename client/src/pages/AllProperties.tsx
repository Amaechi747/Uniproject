import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Pagination, Property } from "../components"


type AllPrtopertiesProps = {}

const AllProperties = (props: AllPrtopertiesProps) => {
  const [properties, setProperties] = useState([]);
  const [currentPropertyPage, setCurrentPropertyPage] = useState(1);
  const [propertyPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("")
      setProperties(res.data);
    };

    fetchPosts();
  }, [])

  // Get current properties
const indexOfLastProperty = currentPropertyPage * propertyPerPage;
const indexOfFirstProperty = indexOfLastProperty - propertyPerPage;
const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

// Change page
const paginate = (pageNumber: number) => setCurrentPropertyPage(pageNumber)

  return (
    <div>
      <Property 
          properties={currentProperties}
      />
      <Pagination
        propertyPerPage={propertyPerPage}
        totalProperties={properties.length}
        paginate={paginate}
      />
    </div>
  )
}

export default AllProperties