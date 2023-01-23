import React from 'react'
import Title from '../components/section1/Title'
import PracticeAreas from '../components/section2/PracticeAreas'
import Reliable from '../components/section3/Reliable'
import Customers from '../components/section4/Customers'
import Legal from '../components/section5/Legal'

const Home = () => {
  return (
    <div>
      <Title/>
      <PracticeAreas/>
      <Reliable/>
      <Customers/>
      <Legal/>
    </div>
  )
}

export default Home
