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

const API_URL = apiUrl;

const Dashboard = () => {
  const [categories, setCategories] = useState({ data: [] });
  console.log(categories);
  const [couponData, setCouponData] = useState();

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bannerData, setBannerData] = useState({ data: [] });
  const [businessData, setBusinessData] = useState();
  console.log("yeh ha vo", businessData);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
  useEffect(() => {
    try {
      const statusCurrent = "active";
      axiosInstance
        .get(`${API_URL}/api/addBusiness/get?status=${statusCurrent}`)
        .then((response) => {
          console.log("yehi hi dekhna na ha", response);
          setBusinessData(response?.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);
  const images = [
    "https://files.123freevectors.com/wp-content/original/202640-plain-light-color-background.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnFOeUqNdWm_niRYu5d_z2Kmz5kOG0OUxR1D5QfDsKsEWAdamIqQ0z65kdsbFo0FpU3I&usqp=CAU",
    "https://files.123freevectors.com/wp-content/original/202640-plain-light-color-background.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCljp7f6E4S8rAfJlLn6lR6pKVyUlSVRTmevoelVN8u2sDg6Eg-Zm8YRxspYKvhgbS2c&usqp=CAU",
    "https://files.123freevectors.com/wp-content/original/202640-plain-light-color-background.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYTli-0R3gy5_Eg3l-0-YcTEPZLd_gJg1aEsUOA8Ts_QbpICKh8NW9NFmCjLQCrxMw5QI&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYTli-0R3gy5_Eg3l-0-YcTEPZLd_gJg1aEsUOA8Ts_QbpICKh8NW9NFmCjLQCrxMw5QI&usqp=CAU",
  ];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };
  const appUrl = "http://localhost:8081";
  const storeUrl = "http://localhost:8081"; // or Google Play Store URL

  const isAppInstalled = () => {
    const anchor = document.createElement("a");
    anchor.href = appUrl;
    return anchor.click() && !anchor.href.includes("http");
  };

  const openApp = () => {
    if (isAppInstalled()) {
      window.location.href = appUrl;
    } else {
      window.location.href = storeUrl;
    }
  };

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
            <div className="flex items-center justify-center gap-2  xxxs:hidden sm:flex md:flex lg:flex xl:flex">
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
                <img
                  src={item.images}
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />{" "}
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div
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
          </div> */}
        </div>
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
      <div className="flex-col justify-center items-center  rounded-[30px]  my-[4rem]">
        <div className="flex justify-center items-center my-8">
          <p className="font-bold text-[35px] xxxs:text-[24px]">Trending Coupons</p>
        </div>
        <div className="grid grid-cols-6 gap-4 sm:grid-cols-2 m-[4rem] xxxs:m-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xxxs:grid-cols-1 xs:grid-cols-1 ">
          {couponData?.products.map((coupon, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                backgroundImage: `url(${getRandomImage()})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

                justifyContent: "center",
                borderRadius: "20px",
              }}
              className="border flex justify-center items-center flex-col bg-white rounded-[20px] w-[100%] p-4 shadow-xl hover:shadow-2xl"
            >
              <div className="">
                <div>
                  <p className="font-[500] text-[20px]">
                    Name : {coupon?.restaurantName}
                  </p>
                  <p className="text-[20px]">{coupon?.offer}</p>
                  <p className="text-[18px] font-[500]">{coupon?.subOffer}</p>
                  <div className="flex justify-center"> 
                  <Button
                    className="my-4 bg-[#f25827] text-white p-[1rem] rounded-[20px] font-[500]"
                    onClick={showModal}
                  >
                    Avail Now
                  </Button>
                  </div>
                  
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
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-col justify-center items-center  rounded-[30px]  my-[4rem]">
        <div className="flex justify-center items-center">
          <p className="font-bold text-[35px] xxxs:text-[25px]">Recommended</p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-2 xxxs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 mt-[2rem] px-2 ">
          {businessData?.businesses?.map((item, index) => (
            <div class="" key={index}>
              <div className="bg-[white] p-[1rem] rounded-[20px]">
                <img
                  src={item?.image}
                  width="100%"
                  style={{ height: "300px" }}
                  className="rounded-[20px]"
                />
                <div className="py-[1rem] leading-8 ">
                  <div className="flex justify-between items-start mb-4  p-2">
                    <p className="font-[500] text-[20px]">
                      {item?.businessName}
                    </p>
                    <p className="font-[500] text-[20px]">{item?.ownerName}</p>
                  </div>
                  <div className=" my-2">
                  <p className="font-[500] text-[20px]">
                    {item?.businessDescription}
                  </p>
                  <p className="text-[20px] text-[gray]">
                    {item?.businessEmail}
                  </p>
                  <p className="text-[20px] text-[gray]">
                    {item?.businessType}
                  </p>
                  <p className="text-[20px] text-[gray]">{item?.location}</p>
                  </div>
           
                  <div className="flex justify-between items-center my-4 ">
                    <div>
                      <p className="text-[20px] font-[500]">Opening Time</p>
                      <p className="text-[20px]  text-[gray]">
                        {item?.openingTime}
                      </p>
                    </div>
                    <div>
                      <p className="text-[20px] font-[500] ">Closing Time</p>
                      <p className="text-[20px] text-[gray]">
                        {item?.closingTime}
                      </p>
                    </div>
                  </div>
                  <p className="text-[18px]  font-[500]">
                    Contact: {item?.phone}
                  </p>
                </div>
<div className="flex justify-center items-center">
<Button
                  className="my-4 bg-[#f25827] text-white p-[1rem] rounded-[20px] font-[500] "
                  onClick={showModal}
                >
                  Order
                </Button>
</div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
