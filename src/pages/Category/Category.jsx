import React,{useState} from "react";
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

const Category = () => {
  const location = useLocation();
  const item = location.state.item;
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <p className="font-[500] text-[20px]">{item.title} Sub-Categories</p>
      </div>
      <div className="grid grid-cols-3 gap-4 m-[4rem] ">
        {items.map((item, index) => (
          <div className=" flex  flex-col justify-center items-center gap-4 bg-white rounded-[20px] w-[400px] p-3 shadow-xl hover:shadow-2xl">
            <div className="flex justify-center items-center">
            <div className="">
              <p className="text-[15px] font-semibold my-2 mt-4">{item.off}</p>
              <p className="text-[15px] font-semibold my-2 mt-8">
                {item.offers}
              </p>
              <Button className="mt-4" onClick={showModal}>Avail Now</Button>
            </div>

            <div className=" w-[160px]">
              <Lottie animationData={animation} loop={true} />
            </div>
            </div>
            
            <div className="flex justify-between  w-[100%]">
            <p className="text-[12px] font-[500]">Valid Till: 07 Jan 2025</p>

                <p className="text-[12px] text-red-600 font-[500]">Know More</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-col justify-center items-center  rounded-[30px] m-[20px] my-[4rem]">
        <div className="flex justify-center items-center">
          <p className="font-bold text-[35px]">Business Categories</p>
        </div>
        <div className="grid grid-cols-6 gap-4 m-[4rem] ">
          {items.map((item, index) => (
            <Link to={`/category`} state={{ item }}>
              <div className="border flex justify-center items-center flex-col bg-white rounded-[20px] w-[200px] p-4 shadow-xl hover:shadow-2xl">
                <img src={item.image} width={60} height={60} />
                <p className="text-[20px] font-semibold my-2 mt-4">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer>
          <div className="flex justify-center items-center flex-col gap-4"> 
          <p className="text-center font-bold text-[20px]">Download Mobile App</p>
        <img src={logo} width={150} height={60} />

          </div>
        
        <Lottie animationData={animation2} loop={true} />
        <p className="text-center font-bold text-[20px]">To Get Your Coupon</p>

      </Modal>
      </div>
    </>
  );
};

export default Category;
