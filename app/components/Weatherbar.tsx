
interface ItemProps {
  city: string;
  countryWithTime: string;
  weather: number;
  bgColor:string;
}
function cls(...classnames: string[]) {
	return classnames.join("");
}
{/* <button
              className={cls(
                "pb-4 font-medium text-sm border-b-2",
                method === "email"
                  ? " border-orange-500 text-orange-400"
                  : "border-transparent hover:text-gray-400 text-gray-500"
              )}
              onClick={onEmailClick}
            > */}
export default function Item({
  city,
  countryWithTime,
  weather,
  bgColor
 
}: ItemProps) {
  return (
      <div className={` flex px-4 pt-5 cursor-pointer justify-between border-b-8 border-2 border-solid border-gray-800 rounded-xl ${bgColor} `}>
        <div className="flex  pb-6">
          <div className="pt-2 flex flex-col">
            <h3 className=" px-4 text-2xl font-bold text-gray-900">{city}</h3>
            <span className=" px-2 mt-1 font-bold text-gray-900">{countryWithTime}</span>
          </div>
        </div>
        <div className="flex space-x-2  ">
          
          <div className="flex -space-x-2 -mr-4 items-center text-sm mb-4  text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor" 
          className="w-16 h-16">
          <path strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" 
          />
          </svg>
            <h3 className=" text-center  px-4 text-5xl font-bold text-gray-900">{weather}º </h3>
          </div>
        </div>
      </div>
  );
}