import React from 'react'
import Skeleton from 'react-loading-skeleton';

const ManageAdminSkeleton = () => {
  return Array(4).fill(0).map((index) =>
    <div className='manageAdminsBodyRow' key={index}>
                <div style={{display: 'flex', gap: '1rem'}}>
                    <Skeleton width={70} />
                    <Skeleton width={70} />
                </div>
                <div><Skeleton width={100} /> </div>
                <div><Skeleton width={20} /> </div>
            </div>
  )
}

export default ManageAdminSkeleton