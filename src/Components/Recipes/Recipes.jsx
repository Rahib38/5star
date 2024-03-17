import PropTypes from "prop-types";
import Recipe from "./Recipe";



const Recipes = ({ items, handleToAdd }) => {
  // console.log(carts);
  // console.log(items);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <Recipe key={item.id} handleToAdd={handleToAdd} item={item}></Recipe>
      ))}
    </div>
  );
};

Recipes.propTypes = {
  items: PropTypes.array,
  handleToAdd:PropTypes.func
};

export default Recipes;
