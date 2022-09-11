import React from 'react'
//import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default () => {
 // const { width, height } = {window.innerHeight}
 const { innerWidth: width, innerHeight: height } = window;
  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
    />
  )
}