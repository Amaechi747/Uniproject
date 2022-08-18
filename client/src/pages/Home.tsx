import React from 'react'
import { Carousel, BannerSearch, FeaturedProperties } from "../components"

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      
      <Carousel />
      <BannerSearch />
      <FeaturedProperties />
    </div>
  )
}

export default Home