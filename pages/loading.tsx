import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        
        <div className="flex" >
            <Skeleton count={3} width={40} height={40}  containerClassName="flex gap-x-2 "/>
        </div>
    )
  }