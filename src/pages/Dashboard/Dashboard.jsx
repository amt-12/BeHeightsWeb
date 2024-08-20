import { Button, Image } from "antd";
import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import {
  BellFilled,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  RightCircleFilled,
  SearchOutlined,
} from "@ant-design/icons";
import { Input, Modal } from "antd";
import example from "../../assets/greenBack.jpg";
import axios from "axios";
const { Search } = Input;
const Dashboard = () => {
  const [active, setActive] = useState(3);
  const [couponData, setCouponData] = useState();
  console.log(couponData);
  useEffect(() => {
    const items = document.querySelectorAll(".slider .item");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");

    const loadShow = () => {
      if (items && items.length > 0) {
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = "none";
        items[active].style.opacity = 1;

        let stt = 0;
        for (var i = active + 1; i < items.length; i++) {
          stt++;
          items[i].style.transform = `translateX(${120 * stt}px) scale(${
            1 - 0.2 * stt
          }) perspective(16px) rotateY(-1deg)`;
          items[i].style.zIndex = -stt;
          items[i].style.filter = "blur(5px)";
          items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }

        stt = 0;
        for (var i = active - 1; i >= 0; i--) {
          stt++;
          items[i].style.transform = `translateX(${-120 * stt}px) scale(${
            1 - 0.2 * stt
          }) perspective(16px) rotateY(1deg)`;
          items[i].style.zIndex = -stt;
          items[i].style.filter = "blur(5px)";
          items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
      }
    };

    loadShow();

    next.onclick = function () {
      setActive(active + 1 < items.length ? active + 1 : active);
      loadShow();
    };

    prev.onclick = function () {
      setActive(active - 1 >= 0 ? active - 1 : active);
      loadShow();
    };
  }, [active]);
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
        const response = await axios.get("http://192.168.1.3:5000/api/product");
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
    <div className="m-4">
      <div className="border h-[830px] bg-[#f25827] rounded-[50px] border-solid p-8 flex flex-col justify-between">
        <div className="flex justify-between items-center  border bg-[#f8f1e1] rounded-[70px] px-[25px] py-2 ">
          <Image src={logo} width={150} height={60} />
          <div className="flex items-center gap-12 justify-center">
            <div className="flex items-center justify-center gap-2">
              <Button className="bg-[#f25827] text-[white] font-medium rounded-[20px]">
                HOME
              </Button>
              <Button className="bg-[#f25827] text-[white] font-medium rounded-[20px]">
                PRODUCTS
              </Button>
              <Button className="bg-[#f25827] text-[white] font-medium rounded-[20px]">
                ABOUT
              </Button>
              <Button className="bg-[#f25827] text-[white] font-medium rounded-[20px]">
                SUPPORT
              </Button>
            </div>

            <p className="text-white">
              <BellFilled className="text-[25px] text-black" />
            </p>
          </div>
        </div>
        <div className="p-[50px] px-[80px]">
          <div className="flex flex-col justify-center items-center ">
            <p className="text-[100px]">Grand Opening</p>
            <p className="text-[60px]">Stay Tuned</p>
          </div>
          <div className="h-80 rounded-[60px] border p-8 bg-[#f8f1e1]">
            <div className="px-8">
              <Input
                className="h-[50px] rounded-[20px]"
                prefix={<SearchOutlined />}
              />
            </div>
            <div className="flex justify-center items-center gap-8 p-8">
              <Button className="border h-[130px] p-[1rem] flex justify-end gap-4 items-center bg-[#f4e5c2] rounded-[20px] text-[20px] font-[500]">
                Popular Items{" "}
                <RightCircleFilled className="text-[#f25827] text-[20px]" />
              </Button>
              <Button className="border h-[130px] p-[1rem] flex justify-end gap-4 items-center bg-[#f4e5c2] rounded-[20px] text-[20px] font-[500]">
                Special Offers for you{" "}
                <RightCircleFilled className="text-[#f25827] text-[20px]" s />
              </Button>
              <Button className="border h-[130px] p-[1rem] flex flex-col justify-center gap-4 items-center text-[white] bg-[black] rounded-[20px] text-[20px] font-[500]">
                Show All{" "}
                <RightCircleFilled className="text-[#f25827] text-[20px]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col justify-center items-center  rounded-[30px] m-[40px] my-[4rem]">
        <div className="flex justify-center items-center">
          <p className="font-bold text-[35px]">Trending Coupons</p>
        </div>
        <div class="slider">
          {couponData?.products.map((coupon, index) => (
            <div class="item" key={index}>
              <div className="">
                <Image src={example} width="100%" height="200px" />
                <div className="py-[1rem] leading-8">
                  <p className="font-[500] text-[20px]">
                    Name : {coupon?.resturantName}
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
                    title="Basic Modal"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  
                  >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </Modal>
                </div>
              </div>
            </div>
          ))}

          <Button id="prev">
            <DoubleLeftOutlined className="text-[#f25827]" />
          </Button>

          <Button id="next">
            <DoubleRightOutlined className="text-[#f25827]" />
          </Button>
        </div>
      </div>
      <div className="flex-col justify-center items-center  rounded-[30px] m-[20px] my-[4rem]">
        <div className="flex justify-center items-center">
          <p className="font-bold text-[35px]">Recommended</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-[2rem] px-10 ">
          {restaurants.map((restaurant, index) => (
            <div class="" key={index}>
              <div className="bg-[white] p-[1rem] rounded-[20px]">
                <Image
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

                <Button className="my-4 bg-[#f25827] text-white p-[1rem] rounded-[20px] font-[500] text-[end]">
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
