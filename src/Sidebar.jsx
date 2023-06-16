import React from "react";
import FilterListToggle from "./FilterListToggle";
import { categoryList, ratingList } from "./data";
import CheckBox from "./CheckBox";
import PriceSlider from "./PriceSlider";

const Sidebar = ({
  selectedCategory,
  selectToggle,
  selectRating,
  selectedRating,
  cusines,
  changeCheckBox,
  selectedPrice,
  changePrice,
}) => {
  return (
    <div>
      <div className="input-group mb-[2rem]">
        <p className="label mb-[0.8rem] font-semibold">Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>
      <div className="input-group mb-[2rem]">
        <p className="label mb-[0.8rem] font-semibold">Cusines</p>
        {cusines.map((cusine) => (
          <CheckBox
            key={cusine.id}
            changeCheckBox={changeCheckBox}
            cusine={cusine}
          />
        ))}
      </div>
      <div className="input-group mb-[2rem]">
        <p className="label-range font-semibold mb-[0.8rem]">Cusine</p>
        <PriceSlider value={selectedPrice} changePrice={changePrice} />
      </div>
      <div className="input-group mb-[2rem]">
        <p className="label mb-[0.8rem] font-semibold">Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectRating={selectRating}
        />
      </div>
    </div>
  );
};

export default Sidebar;
