import react, { useEffect, useState } from "react";
import { Cards } from "./Cards.jsx";
import SearchIcon from "@material-ui/icons/Search";

function App() {
  const APP_ID = "58d9c6ff";
  const APP_KEY = "40dc49cbca9656b8372f64ee905b3f44";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState();
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  // Fetch API from edamam.com
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();

    setRecipes(data.hits);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <>
      {/* Header  */}
      <div className="App ">
        <div className=" container  d-flex align-item-center justify-content-center  ">
          <form
            onSubmit={getSearch}
            className="center "
            style={{
              marginTop: "10rem",
            }}
          >
            <input
              type="text"
              onChange={(event) => {
                const recipeData = event.target.value;
                setSearch(recipeData);
              }}
              placeholder="Search.."
              name="search"
            />
            <button type="submit">
              <i>
                <SearchIcon />
              </i>
            </button>
          </form>
        </div>
      </div>
      {/* Header End */}

      {recipes.map((recipe) => (
        <Cards
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredientLines.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
          keys={recipe.recipe.label}
        />
      ))}
    </>
  );
}
export { App };
