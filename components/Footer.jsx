import img1 from '../src/assets/prashna-pedia-high-resolution-logo-transparent.png'
export default () => {
    return (
        <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="max-w-lg sm:mx-auto text-center">
                <img src={img1} className="sm:w-80 w-56 mx-auto sm:mx-auto" />
                <p className="leading-relaxed mt-2 text-[15px]">
               Your trusted ally in BE exam success. Empowering students with knowledge, guidance, and resources. Explore, prepare, excel – together, we conquer the academic challenges!
                </p>
            </div>
            {/* <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0" >
                {
                    footerNavs.map((item, idx) => (
                        <li className=" hover:text-gray-800">
                            <a key={idx} href={item.href}>
                                { item.name }
                            </a>
                        </li>
                    ))
                }
            </ul> */}
            <div className="mt-8 items-center justify-center sm:flex">
                <div className="mt-4 sm:mt-0 ">
                    <p className="text-center">&copy; 2024 Prashna Pedia All rights reserved.</p> 
                </div>
            </div>
        </footer>
    )
}
