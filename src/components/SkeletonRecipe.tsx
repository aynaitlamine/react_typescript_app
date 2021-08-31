import React from 'react'
import SkeletonElements from './SkeletonElements'



const SkeletonRecipe: React.FC = () => {
    return (
        <div className="card">
            <SkeletonElements classname="image w-full object-cover" />
            <div className="p-2">
                <SkeletonElements classname="title" />
                <SkeletonElements classname="text" />
            </div>
        </div>
    )
}

export default SkeletonRecipe
