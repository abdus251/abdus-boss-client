import { Helmet } from "react-helmet-async";
import conCover from "../../assets/contact/banner.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaClock, FaPhone, FaPhoneVolume, FaTimes, FaTimesCircle } from "react-icons/fa";
import { HiOutlinePhone, HiPhone } from "react-icons/hi";
import ContactForm from "./ContactForm";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <img src={conCover} alt="" />
      <Helmet>
        <title>Abdus Boss | Contact</title>
      </Helmet>
      <div>
        <SectionTitle
          subHeading="Visit Us"
          heading="our location"
        ></SectionTitle>
      </div>
      {/* <div className="my-10 ">
        <div className=" box-content h-10 bg-yellow-600 w-1/3 flex  rounded-none border items-center justify-center">
          <HiPhone  className="h-6 w-6 text-white"/>
        </div>
        <div className="box-content h-28 w-64  bg-red-600 ml-4 mr-4"> 
            hasdfasd;klf
        </div>
      </div> */}
      <div className="md:grid grid-cols-2 lg:grid-cols-3 mx-auto items-center justify-center gap-2">
  <div className="box-content h-12 bg-yellow-500 w-96 border border-gray-300 rounded-none mb-48"> {/* Added border color */}
    <div className="py-2">
      <HiPhone className="h-6 w-6 text-white mx-auto" />
    </div>
    <div className="box-content h-48 bg-base-200 mx-4 mt-2 text-center">
      <h4 className="text-2xl capitalize">PHONE</h4>
      <p>+38(012) 34 56 789</p>
    </div>
  </div>
  <div className="box-content h-12 bg-yellow-500 w-96 border border-gray-300 rounded-none mb-48"> {/* Added border color */}
    <div className="py-2">
      <FaLocationDot className="h-6 w-6 text-white mx-auto" />
    </div>
    <div className="box-content h-48 bg-base-200 mx-4 mt-2 text-center">
      <h4 className="text-2xl capitalize">ADDRESS</h4>
      <p>123 ABS Street, Uni 21, <br /> Bangladesh</p>
    </div>
  </div>
  <div className="box-content h-12 bg-yellow-500 w-96 border border-gray-300 rounded-none mb-48"> {/* Added border color */}
    <div className="py-2">
      <FaClock className="h-6 w-6 text-white mx-auto" />
    </div>
    <div className="box-content h-48 bg-base-200 mx-4 mt-2 text-center">
      <h4 className="text-2xl capitalize">WORKING HOURS</h4>
      <p>Mon - Fri: 08:00 - 22:00 <br />
      Sat - Sun: 10:00 - 23:00</p>
    </div>
  </div>
</div>
<ContactForm/>
    </div>
  );
};

export default Contact;
