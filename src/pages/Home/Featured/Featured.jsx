import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
  return (
    <div className='featured-item bg-fixed text-white pt-8 my-20'>
        <SectionTitle subHeading="Check it out" heading="Featured Item"></SectionTitle>
        <div className='md:flex justify-center items-center py-8 px-16 '>
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className='md:ml-10'>
                <p> Nov 20, 2024</p>

                <h4 className='text-2xl'>WHERE CAN I GET SOME?</h4>
                <p className='uppercase'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut facere iure et optio ad reiciendis quisquam illum architecto, magni doloremque porro, voluptas blanditiis iusto quis accusantium perspiciatis quam eos recusandae ducimus fugit deleniti. Expedita, nam nesciunt aliquid unde illum incidunt nihil assumenda a tempore id nemo, magnam neque repellendus.</p>
                <button className='btn btn-outline text-white mt-12 border-0 border-b-4'>Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default Featured