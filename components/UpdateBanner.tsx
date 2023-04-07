import React, { ReactElement } from 'react'
import UpdateBannerIMG from "../images/update-banner.png";
import Image from 'next/image';

const UpdateBanner = (): ReactElement => {
  return (
    <Image className='mt-20 mb-20' src={UpdateBannerIMG} alt="Get Leatest Update By Subscribe 0ur Newslater" />
  )
}

export default UpdateBanner