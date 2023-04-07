import React, { ReactElement } from 'react'
import LogosIMG from "../images/logos.png";
import Image from 'next/image';

const Logos = (): ReactElement => {
  return (
    <Image src={LogosIMG} alt="Logos" className='w-auto mx-auto mb-10' />
  )
}

export default Logos