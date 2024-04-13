import { useState } from "react"
import tableItems from "./data/data"


export default () => {
    const [selectedItem, setSelectedItem] = useState(0)
    const labelColors = {
        "Good": {
            color: "text-green-600 bg-green-50",
        },
        "Normal": {
            color: "text-blue-600 bg-blue-50",
        },
        "Great": {
            color: "text-pink-600 bg-pink-50",
        },
        "No": {
            color: "text-red-600 bg-red-50",
        },
        "Nice":{
            color:"text-yellow-600 bg-yellow-50"
        },
        "Yes":{
            color: "text-green-800 bg-green-100"
        }
    }

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 sm:py-10 py-5" >
            <div className="max-w-lg">
                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                    BE Previous Year Question Papers
                </h3>
                <p className="text-gray-600 mt-2">
                
Access a comprehensive collection of Bachelor of Engineering (BE) previous year question papers for effective exam revision and preparation.
                </p>
            </div>
            <div className="text-sm mt-12 overflow-x-auto">
                <ul rol="tablist" className="w-full border-b flex items-center gap-x-3 overflow-x-auto">
                    {
                        tableItems.map((item, idx) => (
                            <li key={idx} className={`py-2 border-b-2 ${selectedItem == idx ? "border-indigo-600 text-indigo-600" : "border-white text-gray-500"}`}>
                                <button
                                    role="tab"
                                    aria-selected={selectedItem == idx ? true : false}
                                    aria-controls={`tabpanel-${idx + 1}`}
                                    className="py-2.5 w-15 truncate
                                     px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-100 active:bg-gray-100 font-medium"
                                    onClick={() => setSelectedItem(idx)}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))
                    }
                </ul>
                <table className="w-full table-auto text-left">
                    <thead className="text-gray-600 font-medium border-b">
                        <tr>
                            <th className="w-9/12 py-4 pr-6">{tableItems[selectedItem].title}</th>
                            <th className="py-4 pr-6">Semester</th>
                            <th className="py-4 pr-6">Download</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems[selectedItem].items.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.prop}</td>
                                    {/* <td className="pr-6 py-4 whitespace-nowrap text-indigo-600">{item.sem}</td> */}
                                    <td className="pr-6 py-4 whitespace-nowrap">
                                        <span className={`py-2 px-3 rounded-full font-semibold text-xs ${labelColors[item?.impression]?.color || ""}`}>{item.sem}</span>
                                    </td>
                            
                                    <td className="pr-6 py-4 whitespace-nowrap">
                                       {/* <a href={`${item.linklatest}`} target="_blank" className={`mr-3 py-2 px-3 rounded-full font-semibold text-xs ${labelColors[item?.latesta]?.color || ""}`}><button className="hover:scale-110 duration-200">{item.latest}</button></a> */}

                                       <a href={`${item.link}`} target="_blank" className={` py-2 px-3 rounded-full font-semibold text-xs ${labelColors[item?.available]?.color || ""}`}><button className="hover:scale-110 duration-200">{item.current}</button></a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
        
    )
}