import React, { useState, useEffect } from 'react';
import Recipe from './components/Recipe'
import SkeletonElements from './components/SkeletonElements';

export interface IRecipe {
  recipes: {
    recipe: {
      label: string,
      calories: number,
      image: string
    }
  }[],
}



function App() {
  const [recipes, SetRecipes] = useState<IRecipe["recipes"]>([]);
  const [search, SetSearch] = useState<string>("");
  const [query, SetQuery] = useState<string>("chiken");
  useEffect(() => {
    setTimeout(async (): Promise<any> => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`);
      const data = await response.json();
      SetRecipes(data.hits);
    }, 2000)
    
  }, [query]);

  const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetSearch(e.target.value);
  }

  const getSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    SetRecipes([])
    SetQuery(search)
  }


  return (
    <div className="App font-primary">
      <div className="w-full">
          { recipes.length === 0 ? 
              <div className="flex w-full justify-center px-16 py-6">
                <SkeletonElements classname="btn" />
              </div>
              : 
              <div className="flex w-full justify-center px-16 py-6">
                <form onSubmit={getSearch} method="get">
                  <input className="form-input rounded-full border py-2 px-3" type="text" value={search} placeholder="Search" onChange={updateSearch} />
                  <input className="btn py-2 px-3 ml-2" type="submit" value="Search" />
                </form>
              </div>
          }     
      </div>
      <div className="px-16 py-6 col-span-10">
        <Recipe recipes={recipes} /> 
      </div>
    </div>
  );
}

export default App;
