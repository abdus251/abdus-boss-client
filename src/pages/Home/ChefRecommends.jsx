import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ChefItem from "./ChefItem/ChefItem";

const ChefRecommends = () => {
    const [menu, setMenu] = useState([]);
    useEffect( () => {
      fetch("menu.json")
        .then(res => res.json())
        .then(data => {
          const popularItems = data.filter(item => item.category === "popular");
          setMenu(popularItems)
      })
    }, []);
  return (
    <section className=" mt-24">
      <SectionTitle
        subHeading="Should Try"
        heading="chef recommends"
      ></SectionTitle>
 <div className="grid md:grid-cols-3">
 {menu.map((item, index) => (
  <ChefItem
    key={index} 
    item={item}
  />
))}
      </div>
    </section>
  );
};

export default ChefRecommends;
