import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import example from "../../assets/greenBack.jpg";
import { Button, Image, Modal } from "antd";
import dinner from "../../assets/dinner.png";
import deal from "../../assets/deal.png";
import spa from "../../assets/spa.png";
import salon from "../../assets/salon.png";
import game from "../../assets/dinner.png";
import gift from "../../assets/gift.png";
import online from "../../assets/online.png";
import newdeal from "../../assets/newdeal.png";
import { Link } from "react-router-dom";
import animation from "../../assets/rest.json";
import animation2 from "../../assets/mobile.json";
import Lottie from "lottie-react";
import logo from "../../assets/logo.png";
import axiosInstance from "../../../axiosInstance";
import { apiUrl } from "../../../config";

const API_URL = apiUrl;

const Category = () => {
  const location = useLocation();
  const item = location.state.item;
  console.log(item?.subCategories);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState({ data: [] });

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await axiosInstance.get(
          `${API_URL}/api/category/getAllCategory`
        );
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getCategory();
  }, []);
  const items = [
    {
      image: dinner,
      title: "Buffets",
      offers: "Exclusive Buffet Offers",
      off: "50% OFF",
    },
    {
      image: deal,
      title: "Restaurant Deals",
      offers: "Special Restaurant Discounts",
      off: "50% OFF",
    },
    {
      image: spa,
      title: "Spa Deals",
      offers: "Relaxation Offers & Packages",
      off: "50% OFF",
    },
    {
      image: salon,
      title: "Salon Deals",
      offers: "Salon Service Discounts",
      off: "50% OFF",
    },
    {
      image: game,
      title: "Games & Outing",
      offers: "Entertainment Offers & Deals",
      off: "50% OFF",
    },
    {
      image: gift,
      title: "Gifts Cards",
      offers: "Gift Card Discounts",
      off: "50% OFF",
    },
    {
      image: online,
      title: "Online Shopping",
      offers: "Online Shopping Offers",
      off: "50% OFF",
    },
    {
      image: newdeal,
      title: "New Deals",
      offers: "Latest Deals & Offers",
      off: "50% OFF",
    },
  ];
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex justify-center items-center border shadow-xl hover:shadow-2xl m-4 p-2 bg-[#f25827] rounded-md">
        <p className="font-[500] text-[20px]">{item.name} Sub-Categories</p>
      </div>
      <div className="grid grid-cols-3 gap-4 m-[1rem] xxxs:grid-cols-1  xs:grid-cols-3 md:grid-cols-4 xl:grid-cols-3 lg:grid-cols-4">
        {item?.subCategories.map((item, index) => (
          <div
            key={index}
            style={{ width: "100%" }}
            className="flex flex-col justify-center items-center gap-4 bg-white rounded-[20px]  p-3 shadow-xl hover:shadow-2xl "
          >
            <div className="flex justify-between mt-8 xs:flex-col xs:justify-center xs:items-center xl:flex-row">
              <div className="">
                <p className="text-[15px] font-semibold my-2 text-center">{item}</p>
                <Button className="mt-4" onClick={showModal}>
                  Avail Now
                </Button>
              </div>

              <div className=" w-[160px]">
                <Lottie animationData={animation} loop={true} />
              </div>
            </div>

            {/* <div className="flex justify-between  w-[100%]">
            <p className="text-[12px] font-[500]">Valid Till: 07 Jan 2025</p>

                <p className="text-[12px] text-red-600 font-[500]">Know More</p>
            </div> */}
          </div>
        ))}
      </div>
      <div className="flex-col justify-center items-center  rounded-[30px]  my-[4rem]">
        <div className="flex justify-center items-center my-8">
          <p className="font-bold text-[35px] xxxs:text-[25px] ">Business Categories</p>
          {/* <a href="#" onClick={openApp}>
            Open App
          </a>{" "} */}
        </div>
        <div className="grid grid-cols-6 gap-4 sm:grid-cols-2 xxxs:m-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xxxs:grid-cols-1 xs:grid-cols-2">
        {/* <div className=""> */}
          {categories?.data.map((item, index) => (
            <Link to={`/category`} state={{ item }}>
              <div
                key={index}
                className="border flex justify-center items-center flex-col bg-white rounded-[20px] md:w-[300px]  xxxs:w-[260px] xs:w-[200px] sm:w-[280px]  p-4 shadow-xl hover:shadow-2xl"
              >
                <img
                  src={item.images}
                  objectFit="contain"
                  style={{ width: "100%", height: "100%", padding:20}}
                />
                <p className="text-[20px] font-semibold my-2 mt-4">
                  {item.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
