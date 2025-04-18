import { FaGoogle } from "react-icons/fa"
import useAuth from "../../hooks/useAuth"
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(result => {
        console.log(result.user);
        const userInfo = {
            email: result.user?.email,
            name: result.user?.displayName
        }
        axiosPublic.post('/users', userInfo)
        .then(res =>{
            console.log(res.data);
            navigate('/')
        })
    })
}

  return (
    <div>
        <div className="p-2 ml-6">
        <div className="divider"></div>
            <button onClick={handleGoogleSignIn} className="btn bg-orange-200">
                <FaGoogle className="mr-2 "></FaGoogle>
                Google
            </button>
        </div>
    </div>
  )
}

export default SocialLogin