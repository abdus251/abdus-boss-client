import { Link } from 'react-router-dom'
import footerLogo from '../../../assets/others/logo.png'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <footer className="footer bg-neutral text-neutral-content p-10 ">
  <aside className=''>
  <h6 className="footer-title">Contact US</h6>
    <p>
    123 ABS Street, Uni 21, Bangladesh <br />
+88 01913475179 <br />
Mon - Fri: 08:00 - 22:00 <br />
Sat - Sun: 10:00 - 23:00
      <br />

    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Follow US</h6>
    <div className="grid grid-flow-col gap-4">
      <Link>
      <FaTwitter className='h-6 w-6' />
      </Link>
      <Link>
       <FaYoutube className='h-6 w-6'/>
      </Link>
      <Link>
        <FaFacebook className='h-6 w-6'/>
      </Link>
    </div>
  </nav>
  
</footer>
<p className='text-center pt-3 h-12 items-center justify-center bg-black text-white'>Copyright © {new Date().getFullYear()} - All right reserved by Abdus Boss Restaurant Ltd</p>
</>
  )
}

export default Footer