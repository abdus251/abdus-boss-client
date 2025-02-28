import { HiArrowNarrowUp } from "react-icons/hi";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import axios from "axios";


const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = async(data) => {
    const contactItem = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message,
};
console.log(contactItem);

  };
  
  return (
    <div>
      <div className="mt-8">
        <SectionTitle
          subHeading="Send Us a Message"
          heading="contact form"
        ></SectionTitle>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-6">
              {/* name */}
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text text-xl font-bold">Name*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
              {/* Email */}
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text text-xl font-bold">Email*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-xl font-bold">Phone*</span>
              </label>
              <input
                type="number"
                placeholder="Enter your phone number "
                {...register("phone", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
            {/* recipe details */}
            <label className="form-control">
              <div className="label">
                <span className="label-text text-xl font-bold ">Message*</span>
              </div>
              <textarea
                {...register("message")}
                className="textarea textarea-bordered h-24"
                placeholder="Write your message here"
              ></textarea>
            </label>
            <div className="form-control w-full my-6"></div>
            <div className="flex items-center justify-center mb-20">
              <button className="btn bg-yellow-700 rounded-none text-white">
                Send Message
                <HiArrowNarrowUp />{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
