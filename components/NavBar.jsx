import { useEffect, useState } from 'react'
import img1 from '../src/assets/prashna-pedia-high-resolution-logo-transparent.png'
import { Link } from 'react-router-dom'


export default () => {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Home", path: "/" },
        { title: "Papers", path: "/papers" },
        { title: "About Us", path: "javascript:void(0) " },
        { title: "Contact Us", path: "/contact" }
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, [])


    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
                <img 
                   className='w-80 sm:w-96'
                    src={img1}
                    alt="PrashnaPedia Logo"
                />
            <div className="md:hidden">
                <button className="menu-btn text-gray-500 hover:text-gray-800"
                    onClick={() => setState(!state)}
                >
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )
                    }
                </button>
            </div>
        </div>
    )

    return (
        <>
        
        <div className='relative shadow-lg rounded-3xl' >
            
            <div className='relative' >
                <header className='relative'>
                    {/* <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                        <Brand />
                    </div> */}
                    <nav className={`pb-5 md:text-sm ${state ? "relative top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
                        <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                            <Brand />
                            <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                                <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                                    {
                                        navigation.map((item, idx) => {
                                            return (
                                                <li key={idx} className="text-gray-700 hover:text-gray-600 text-lg hover:underline">
                                                    <Link to={item.path} className="block">
                                                        {item.title}
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                
                            </div>
                        </div>
                    </nav>
                </header>
              
            </div>
        </div>
      
        </>
    )
}