import React, { useState } from 'react'
import ImageApi from './imageAPI'
import Topbar from './Topbar'
import Overview from './Overview'


function Layout() {
    const [selector, setSelector] = useState(true)
  return (
    <>
    <Topbar setSelector={setSelector} selector={selector}/>
    {selector? <Overview />:<ImageApi />}
    </>
  )
}

export default Layout
