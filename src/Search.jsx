import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ value, changeEvent }) => {
  return (
    <div className="search__wrapper flex items-center border-b-[1px] border-solid border-[#888] py-[1.5rem] px-[1rem]">
      <FaSearch className="search__icon mr-[2rem] text-[#999]" />
      <input
        type="text"
        placeholder="Bohoo Land.."
        className="text-[1.5rem] outline-none border-none w-[100%] placeholder:text-[#999] font-sans"
        value={value}
        onChange={changeEvent}
      />
    </div>
  );
};

export default Search;
