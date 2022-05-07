import React, { useEffect } from "react";
import Collection from "../components/All_Products/collection";
import Sidebar from "../components/All_Products/sidebar";
import "../css/women.css";
import AttachMoney from "@material-ui/icons/AttachMoney";
import HomeIcon from "@material-ui/icons/Home";
import ColorLens from "@material-ui/icons/ColorLens";
import ClearAll from "@material-ui/icons/ClearAll";
import { womensData } from "../Redux/action";
import { useDispatch, useSelector } from 'react-redux'


const items = [
  {
    name: "category",
    label: "Category",
    Icon: HomeIcon,
    items: [
      { name: "bracelet", label: "Bracelet" },
      { name: "jackets", label: "Jackets" },
      { name: "pants", label: "Pants" },
      { name: "skirts", label: "Skirts" },
      { name: "suits", label: "Suits" },
      { name: "high heel", label: "High heel" },
      { name: "T-Shirts & Vests", label: "T-Shirts & Vests" }
    ]
  },
  {
    name: "size",
    label: "Size",
    Icon: ClearAll,
    items: [
      { name: "one sizes", label: "One Size" },
      { name: "XXS", label: "XXS" },
      { name: "XS", label: "XS" },
      { name: "S", label: "S" },
      { name: "M", label: "M" },
      { name: "L", label: "L" },
      { name: "XL", label: "XL" },
      { name: "XXL", label: " XXL" }
    ]
  },
  {
    name: "colour",
    label: "Colour",
    Icon: ColorLens,
    items: [
      { name: "black", label: "Black" },
      { name: "blue", label: "Blue" },
      { name: "red", label: "Red" },
      { name: "yellow", label: "Yellow" },
      { name: "green", label: "Green" },
      { name: "white", label: "White" }
    ]
  },
  {
    name: "price",
    label: "Price",
    Icon: AttachMoney,

    items: [AttachMoney,
      { name: "200", label: "~200" },
      { name: "200-500", label: "200-500" },
      { name: "500-1000", label: "500-1000" },
      { name: "1000-1500", label: "1000-1500" },
      { name: "1500", label: "1500~" }
    ]
  }
];

const Women = () => {

  const dispatch = useDispatch()
  const womenProducts = useSelector(state => state.womenProducts);
  console.log('womenProducts', womenProducts);

  const storingData = useSelector(state => state.storingData);
  console.log('storingData', storingData);

  const getProduct = async () => {
    const response = await fetch(
      "https://farfetch-backend.herokuapp.com/products2"
    );
    const data = await response.json();
    dispatch(womensData(data));
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="women">
      {/* <News /> */}
      <div className="page-news">
        <h6>DESIGNER CLOTHING FOR WOMEN</h6>
        <p>
          Shop the best global brands and curate your wardrobe with our
          selection of designer clothing for women.
        </p>
      </div>
      <div className="women-page">
        <div className="sidebar">
          <Sidebar items={items} />
        </div>
        <div className="collection">
          { womenProducts.map(product => (
            <Collection
              products={"products"}
              key={product._id}
              id={product._id}
              image={product.img_url}
              title={product.title}
              Category={product.category}
              description={product.detail}
              price={product.price}
            />
          ))}
        </div>
      </div>
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Women;
