import React, { FC, ReactElement } from 'react'
import { GridLoader } from 'react-spinners'

interface Props {
  loading?: boolean
}

const Loader: FC<Props> = ({ loading }): ReactElement => {
  return (
    <div
      className='h-screen w-full bg-slate-100 flex items-center justify-center overflow-hidden'
      style={{ height: `${loading ? '100vh' : ''}` }}
    >
      <GridLoader
        color="#959595"
        margin={5}
        size={20}
      />
    </div>
  )
}

export default Loader;