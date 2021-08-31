import React from 'react'
import { IRecipe as Props } from "../App";
import SkeletonRecipe from './SkeletonRecipe'


interface IProps {
    recipes: Props["recipes"]
}


const Recipes: React.FC<IProps> = ({ recipes }) => {

    const renderList = (): JSX.Element[] => {
        return recipes.map(({ recipe }, index) => {
            return (
                <div className="card" key={index}>
                    <img src={recipe.image} alt={recipe.label} className="h-32 sm:h-48 w-full object-cover" />
                    <div className="p-2">
                        <h1>{recipe.label}</h1>
                        <h4>{recipe.calories}</h4>
                    </div>
                </div>
            )
        })
    }

    return (
        
        <div className="mt-8 grid grid-cols-4 gap-10">
            { recipes.length === 0 ? [1,2,3,4,5,6,7,8,9,10].map((n)=> <SkeletonRecipe  key={n} />): renderList() }
        </div>
    )
}

export default Recipes
