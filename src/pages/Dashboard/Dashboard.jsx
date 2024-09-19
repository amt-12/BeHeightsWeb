import { Button, Image } from "antd";
import React, { useRef, useEffect, useState, Platform } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../assets/logo.png";
import {
  BellFilled,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  RightCircleFilled,
  SearchOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Input, Modal, Dropdown, message, Space } from "antd";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import animation2 from "../../assets/mobile.json";
import { Link } from "react-router-dom";
import example from "../../assets/greenBack.jpg";
import axiosInstance from "../../../axiosInstance";
import dinner from "../../assets/dinner.png";
import deal from "../../assets/deal.png";
import spa from "../../assets/spa.png";
import salon from "../../assets/salon.png";
import game from "../../assets/dinner.png";
import gift from "../../assets/gift.png";
import online from "../../assets/online.png";
import newdeal from "../../assets/newdeal.png";
import Lottie from "lottie-react";
import { apiUrl } from "../../../config";

const { Search } = Input;
const API_URL = apiUrl;

const Dashboard = () => {
  const [active, setActive] = useState(3);
  const [categories, setCategories] = useState({ data: [] });
  console.log(categories);
  const [couponData, setCouponData] = useState();

  console.log("adasdasdasdadsa", couponData);
  // useEffect(() => {
  //   const items = document.querySelectorAll(".slider .item");
  //   const next = document.getElementById("next");
  //   const prev = document.getElementById("prev");

  //   const loadShow = () => {
  //     if (items && items.length > 0) {
  //       items[active].style.transform = `none`;
  //       items[active].style.zIndex = 1;
  //       items[active].style.filter = "none";
  //       items[active].style.opacity = 1;

  //       let stt = 0;
  //       for (var i = active + 1; i < items.length; i++) {
  //         stt++;
  //         items[i].style.transform = `translateX(${120 * stt}px) scale(${
  //           1 - 0.2 * stt
  //         }) perspective(16px) rotateY(-1deg)`;
  //         items[i].style.zIndex = -stt;
  //         items[i].style.filter = "blur(5px)";
  //         items[i].style.opacity = stt > 2 ? 0 : 0.6;
  //       }

  //       stt = 0;
  //       for (var i = active - 1; i >= 0; i--) {
  //         stt++;
  //         items[i].style.transform = `translateX(${-120 * stt}px) scale(${
  //           1 - 0.2 * stt
  //         }) perspective(16px) rotateY(1deg)`;
  //         items[i].style.zIndex = -stt;
  //         items[i].style.filter = "blur(5px)";
  //         items[i].style.opacity = stt > 2 ? 0 : 0.6;
  //       }
  //     }
  //   };

  //   loadShow();

  //   next.onclick = function () {
  //     setActive(active + 1 < items.length ? active + 1 : active);
  //     loadShow();
  //   };

  //   prev.onclick = function () {
  //     setActive(active - 1 >= 0 ? active - 1 : active);
  //     loadShow();
  //   };
  // }, [active]);
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const coupons = [
    { code: "BB10", discount: "10% off", expiry: "2024-06-30" },
    { code: "BB20", discount: "20% off", expiry: "2024-07-15" },
    { code: "BB30", discount: "30% off", expiry: "2024-08-01" },
    { code: "BB40", discount: "40% off", expiry: "2024-09-10" },
    { code: "BB50", discount: "50% off", expiry: "2024-10-25" },
    { code: "BB60", discount: "60% off", expiry: "2024-11-30" },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`${API_URL}/api/product`);
        setCouponData(response?.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const restaurants = [
    {
      restaurantName: "The Gourmet Bistro",
      subHeading: "Fine Dining",
      contactNumber: "123-456-7890",
    },
    {
      restaurantName: "Pasta Paradise",
      subHeading: "Italian Cuisine",
      contactNumber: "234-567-8901",
    },
    {
      restaurantName: "Sushi Haven",
      subHeading: "Japanese Sushi",
      contactNumber: "345-678-9012",
    },
    {
      restaurantName: "Grill Masters",
      subHeading: "Barbecue",
      contactNumber: "456-789-0123",
    },
    {
      restaurantName: "Burger Bliss",
      subHeading: "Gourmet Burgers",
      contactNumber: "567-890-1234",
    },
    {
      restaurantName: "Vegan Delights",
      subHeading: "Plant-Based Options",
      contactNumber: "678-901-2345",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bannerData, setBannerData] = useState({ data: [] });
  console.log(bannerData);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const itemss = [
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
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const items = [
    {
      label: "Home",
      key: "1",
    },
    {
      label: "Landing Page 1",
      key: "2",
    },
    {
      label: "Landing Page 2",
      key: "3",
    },
  ];
  useEffect(() => {
    try {
      axiosInstance
        .get(`${API_URL}/api/banner/getAllBanners`)
        .then((response) => {
          setBannerData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div className="m-4">
      <div
        className="border h-[830px] bg-[#f25827] rounded-[50px] border-solid p-8 flex flex-col justify-between"
        style={{ height: "100%" }}
      >
        <div className="flex justify-between items-center  border bg-[#f8f1e1] rounded-[70px] px-[25px] py-2 ">
          <Image src={logo} width={150} height={60} />
          <div className="flex items-center gap-12 justify-center">
            <div className="xs:visible md:hidden">
              <Dropdown
                menu={{
                  items,
                  onClick,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
            <div className="flex items-center justify-center gap-2 xs:hidden">
              <Link to={`/LandingPage1`}>
                <Button className="bg-[#f25827] text-[white] font-medium rounded-[20px]">
                  LandingPage1
                </Button>
              </Link>

              <Link to={`/LandingPage2`}>
                <Button className="bg-[#f25827] text-[white] font-medium rounded-[20px]">
                  LandingPage2
                </Button>
              </Link>
              {/* <Button className="bg-[#f25827] text-[white] font-medium rounded-[20px]">
                ABOUT
              </Button>
              <Button className="bg-[#f25827] text-[white] font-medium rounded-[20px]">
                SUPPORT
              </Button> */}
            </div>

            <p className="text-white">
              <BellFilled className="text-[25px] text-black" />
            </p>
          </div>
        </div>
        <div className=" ">
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            autoplay={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper m-4"
            style={{ width: "100%" }}
          >
            {bannerData.data.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.images} width="100%" height="100%" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className="rounded-[60px] border p-8 bg-[#f8f1e1]"
            style={{ width: "100%", height: "100%" }}
          >
            <div className="px-8">
              <Input
                className="h-[50px] rounded-[20px]"
                prefix={<SearchOutlined />}
              />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-3 justify-center items-center gap-8 p-6">
              <Button className="border h-[100px] p-[1rem] flex justify-center gap-4  text-center items-center bg-[#f4e5c2] rounded-[20px] text-[20px] font-[500]">
                Popular Items
                <RightCircleFilled className="text-[#f25827] text-[20px]" />
              </Button>
              <Button className="border h-[100px] p-[1rem] flex justify-center gap-4 text-center items-center bg-[#f4e5c2] rounded-[20px] text-[20px] font-[500]">
                Special Offers for you
                <RightCircleFilled className="text-[#f25827] text-[20px]" />
              </Button>
              <Button className="border h-[120px] p-[1rem] flex flex-col justify-center gap-4 text-center items-center text-[white] bg-[black] rounded-[20px] text-[20px] font-[500]">
                Show All
                <RightCircleFilled className="text-[#f25827] text-[20px]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col justify-center items-center  rounded-[30px] m-[20px] my-[4rem]">
        <div className="flex justify-center items-center">
          <p className="font-bold text-[35px]">Business Categories</p>
        </div>
        <div className="grid grid-cols-6 gap-4 m-[4rem] xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
          {categories?.data.map((item, index) => (
            <Link to={`/category`} state={{ item }}>
              <div
                key={index}
                className="border flex justify-center items-center flex-col bg-white rounded-[20px] w-[100%] p-4 shadow-xl hover:shadow-2xl"
              >
                <img
                  src={item.images}
                  style={{ width: "100%", height: "200px" }}
                />
                <p className="text-[20px] font-semibold my-2 mt-4">
                  {item.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-col justify-center items-center  rounded-[30px] m-[40px] my-[4rem]">
        <div className="flex justify-center items-center">
          <p className="font-bold text-[35px]">Trending Coupons</p>
        </div>
        <div className=" ">
          <Swiper
            direction={"horizontal"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            autoplay={true}
            modules={[Mousewheel, Pagination]}
            className="mySwiper m-4"
            style={{ width: "100%" }}
          >
            {couponData?.products.map((coupon, index) => (
              <SwiperSlide key={index}>
                <div className="py-[1rem] leading-8">
                  <p className="font-[500] text-[20px]">
                    Name : {coupon?.restaurantName}
                  </p>
                  <p className="text-[20px]">{coupon?.offer}</p>
                  <p className="text-[18px] font-[500]">{coupon?.subOffer}</p>
                  <Button
                    className="my-4 bg-[#f25827] text-white p-[1rem] rounded-[20px] font-[500]"
                    onClick={showModal}
                  >
                    Avail Now
                  </Button>
                  <Modal
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer
                  >
                    <div className="flex justify-center items-center flex-col gap-4">
                      <p className="text-center font-bold text-[20px]">
                        Download Mobile App
                      </p>
                      <img src={logo} width={150} height={60} />
                    </div>
                    <Lottie animationData={animation2} loop={true} />
                    <p className="text-center font-bold text-[20px]">
                      To Get Your Coupon
                    </p>
                  </Modal>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>
      </div>
      <div className="flex-col justify-center items-center   rounded-[30px] m-[20px] my-[4rem]">
        <div className="flex justify-center items-center">
          <p className="font-bold text-[35px]">Recommended</p>
        </div>
        <div className="grid grid-cols-3 xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-[2rem] px-10 ">
          {restaurants.map((restaurant, index) => (
            <div class="" key={index}>
              <div className="bg-[white] p-[1rem] rounded-[20px]">
                <img
                  src={example}
                  width="100%"
                  height="200px"
                  className="rounded-[20px]"
                />
                <div className="py-[1rem] leading-8 px-4">
                  <p className="font-[500] text-[20px]">
                    {restaurant?.restaurantName}
                  </p>
                  <p className="text-[20px] text-[gray]">
                    {restaurant?.subHeading}
                  </p>
                  <p className="text-[18px]  font-[500]">
                    Contact: {restaurant?.contactNumber}
                  </p>
                </div>

                <Button className="my-4 bg-[#f25827] text-white p-[1rem] rounded-[20px] font-[500] text-[end]" onClick={showModal}>
                  Order
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
