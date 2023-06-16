import React, { useEffect, useState } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import List from "./List";
import Empty from "./Empty";
import { dataList } from "./data";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [cusines, setCusines] = useState([
    {
      id: 1,
      checked: false,
      label: "Italien",
    },
    {
      id: 2,
      checked: false,
      label: "Chinise",
    },
    {
      id: 3,
      checked: false,
      label: "American",
    },
  ]);
  const [selectedPrice, setSelectedPrice] = useState([1000, 6000]);
  const [list, setList] = useState(dataList);
  const [inputSearch, setInputSearch] = useState("");
  const [results, setResults] = useState(false);

  const handleSelectCategory = (e, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (e, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeCheckBox = (id) => {
    const cusineStateList = cusines;
    const changeCheckedCusines = cusineStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setCusines(changeCheckedCusines);
  };

  const handleChangePrice = (e, value) => setSelectedPrice(value);

  const applyFilters = () => {
    let updatedList = dataList;

    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    const cusineChecked = cusines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cusineChecked.length) {
      updatedList = updatedList.filter((item) =>
        cusineChecked.includes(item.cuisine)
      );
    }

    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    if (inputSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
          -1
      );
    }

    setList(updatedList);

    !updatedList.length ? setResults(false) : setResults(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, cusines, selectedPrice, inputSearch]);

  return (
    <div className="home flex flex-col h-[100vh]">
      <Search
        value={inputSearch}
        changeEvent={(e) => setInputSearch(e.target.value)}
      />
      <div className="home__sidebarList-wrapper flex flex-1 overflow-y-auto">
        <div className="home__sidebar-wrapper basis-72 p-[1rem] overflow-y-auto">
          <Sidebar
            selectedCategory={selectedCategory}
            selectToggle={handleSelectCategory}
            selectRating={handleSelectRating}
            selectedRating={selectedRating}
            changeCheckBox={handleChangeCheckBox}
            cusines={cusines}
            selectedPrice={selectedPrice}
            changePrice={handleChangePrice}
          />
        </div>
        <div className="home__list-wrapper flex-1 p-[1rem] overflow-y-auto">
          {results ? <List list={list} /> : <Empty />}
        </div>
      </div>
    </div>
  );
};

export default Home;
