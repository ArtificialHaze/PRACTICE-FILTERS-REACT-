import React from "react";

const ListItem = ({
  item: { coverSrc, title, price, deliveryFee, serviceTime, rating },
}) => (
  <div className="list-item-wrapper">
    <img
      className="w-[100%] rounded-sm h-[200px] object-cover"
      src={coverSrc}
      alt={title}
    />
    <header className="flex justify-between my-[1rem] mx-0 items-center">
      <h4>{title}</h4>
      <span className="text-[0.75rem] bg-[#97ffff] p-[0.5rem] rounded-sm font-bold">
        &#9733; {rating}
      </span>
    </header>
    <footer className="text-[0.8rem] flex justify-between items-center">
      <p>
        <b>{serviceTime}</b>
        <span className="text-[#777] font-semibold ml-[1rem]">
          Delivery Fee ${deliveryFee}
        </span>
      </p>
      <p>
        <b>${price}</b>
      </p>
    </footer>
  </div>
);

export default ListItem;
