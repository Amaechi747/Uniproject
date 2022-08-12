import React from 'react'
import { Slider, BannerSearch, FeaturedProperties } from "../components"

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      
      <Slider />
      <BannerSearch />
      <FeaturedProperties />
    </div>
  )
}

export default Home