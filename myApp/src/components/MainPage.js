import React, {useState} from 'react'
import { FaStar } from "react-icons/fa";

const MainPage = () => {

    const [rating, setRating] = useState(0);

    const handleClick = (index) => {
        setRating(index + 1);
      };
    
  return (
    <React.Fragment>
    <main className="relative md:w-5/12 md:mx-auto">
      <div className="bg-black  h-40 w-auto mx-10 centered pl-40 mt-40 rounded-lg md:pl-20">
       {
        [...Array(5)].map((item, index) => {
            return(
                <div key={index}
                className={`text-7xl text-white ${ index < rating ?"text-yellow-500" : "text-gray-500"}`}
                onClick={() => handleClick(index)}
                >
                    <FaStar/>
                </div>
            )
        })
       }
      </div>

      {/* rating section */}
      <div className="absolute top-0 left-14">
        <div className="bg-yellow-500 w-32 h-48 rounded-lg centered flex-col">
        <p className="text-7xl font-bold">{rating}.0</p>
        <p className="text-2xl font-semibold pt-5 uppercase">Rating</p>
        </div>
      </div>
    </main>
  </React.Fragment>
  )
}

export default MainPage