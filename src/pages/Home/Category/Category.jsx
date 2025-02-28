import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import bisto from "../../../assets/home/chef-service.jpg";

const Category = () => {
  return (
    <section className="">
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"order online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${bisto})` }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <span className="box-content h-56 w-10/12 bg-white">
          <h2 className="text-center mt-16 mb-4 text-3xl">Abdus Boss</h2>
          <p className="px-36 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
          </span>
        </div>
      </div>

      {/* <div className="relative">
  <img src={bisto} alt="" className="absolute top-0 left-0 w-full h-auto" />
  <div className="box-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-8/12 bg-white text-black text-center flex flex-col items-center justify-center mt-56">
    <span className="text-3xl">Abdus Boss</span>
    <p className="mt-2 px-4"> 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta id quaerat, nostrum mollitia voluptates debitis fuga necessitatibus a? Cumque in tempora, quod voluptatibus repellat odit rerum soluta neque nisi.
    </p>
  </div>
</div> */}
    </section>
  );
};

export default Category;
