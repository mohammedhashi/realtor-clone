 
import {useLocation,useNavigate} from 'react-router-dom'


export default function Header() {
    const location = useLocation() ;
    console.log(location.pathname)
    const navigate = useNavigate();
    
    function pathMatchRoute(route) {
        if (route === location.pathname) {
          return true;
        }
      }

  return (
    <div  className="bg-white border-b shadow-sm sticky top-0 z-40">
    <header  className="flex justify-between items-center px-12 max-w-6xl ">
        <div>
<img src='https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg' alt='logo'
className='h-5 cursor-pointer' onClick={()=>navigate("/")} /> 
        </div>
        <div>
            <ul className="flex space-x-10">
                <li  className= {`py-3 text-sm font-semibold cursor-pointer text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute('/')&& "text-red-500"} `}  onClick={()=>navigate("/")}>Home</li>
                <li className= {`py-3 text-sm font-semibold cursor-pointer text-gray-400 border-b-[3px] border-b-transparent  ${pathMatchRoute('/offers')&&'text-red-500'}`}  onClick={()=>navigate("/offers")} >Offers</li>
                <li className= {`py-3 text-sm font-semibold cursor-pointer text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute('/sign-in')&& 'text-red-500'} `}  onClick={()=>navigate('/sign-in')}  >Sing in</li>
            </ul>
        </div>
    </header>
    </div>
  )
}
