
import React from 'react'
import ImageSlider from '../Components/Slide'
import LatestPrduct from '../Components/LatestPrduct'
import Bestproduct from '../Components/Bestproduct'
import OurPolicy from '../Components/Ourpolicy'
import NewsletterBox from '../Components/NewsletterBox'
import Relatedproduct from '../Components/Relatedproduct'

function Home() {
  return (
    // <div className="bg-[url('bac3.webp')]">
    <div>
      <ImageSlider/>
      <LatestPrduct/>
      <Bestproduct/>
      <OurPolicy/>
      <NewsletterBox/>
      
    </div>
  )
}

export default Home

