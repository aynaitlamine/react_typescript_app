import React from 'react'

type IProps = {
    classname: string
}


const SkeletonElements: React.FC<IProps> = ({ classname }) => {
    const classes = `skeleton ${classname}`
    return (
        <div className={classes}>
            
        </div>
    )
}

export default SkeletonElements
