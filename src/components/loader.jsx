import { Loader2 } from 'lucide-react'
import React from 'react'

const Loader = () => {
  return (
    <div className=' w-full mt-20 flex items-center justify-center'>
        <Loader2 className=' h-12 w-12 animate-spin'/>
    </div>
  )
}

export default Loader