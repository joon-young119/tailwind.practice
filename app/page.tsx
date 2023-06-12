import type { NextPage } from "next";
import Item from "./components/Weatherbar";
import Button from "./components/button";
import PhotoIcon from "./components/photoIcon";
import Profile from "./components/profile";

const Home: NextPage = () => {
    return (
    <div className="bg-pink-100 w-full h-screen grid grid-cols-3  py-32  px-32 gap-24">
      <div className="p-10 bg-white flex flex-col justify-between ">
<div className="mt-10">
        <h1 className="text-6xl font-extrabold">Weather</h1>
      </div>
    <Item bgColor="bg-white" city="Seoul" countryWithTime="Korea,12AM"  weather={30}></Item>
    <Item bgColor="bg-yellow-400" city="NewYork" countryWithTime="USA,12AM"  weather={25}></Item>
    <Item bgColor="bg-teal-400" city="Tokyo" countryWithTime="Japan,12AM"  weather={22}></Item>
    <Item bgColor="bg-red-500" city      ="New Delhi" countryWithTime="India,12AM"  weather={24}></Item>
    <div className="mx-auto">
      <Button mark="+"></Button>
    </div>
    </div>
      
      <div className="bg-white flex flex-col p-10 justify-between ">
      
      <div className="mt-10   ">
      <Button mark="X"></Button>
      </div>
      <div className="">
        <h1 className="text-xl text-center font-bold text-gray-600 ">SIMPLE TAG</h1>
        <h1 className="text-4xl text-center font-extrabold mt-3">work with best</h1>
        <h1 className="text-4xl text-center font-extrabold">designer</h1>
      
      </div>
      <div className="  grid grid-cols-2 p-4 gap-4 mt-6 -mx-4">
        <div className=" hover:bg-yellow-600 bg-yellow-400 h-44 border-2 border-black rounded-3xl cursor-pointer ">
        <div className="flex flex-col items-center mt-16 "><PhotoIcon/></div>
        </div>
        <div className="hover:bg-teal-600 bg-teal-400 rounded-3xl border-2 cursor-pointer border-black">
        <div className="flex flex-col items-center mt-16 "><PhotoIcon/></div>
        </div>
        <div className="hover:bg-pink-600 bg-pink-400 h-44 rounded-3xl border-2 cursor-pointer border-black" ><div className="flex flex-col items-center mt-16 "><PhotoIcon/></div></div>
        <div className="hover:bg-red-700 bg-red-500 rounded-3xl border-2 cursor-pointer border-black"><div className="flex flex-col items-center mt-16 "><PhotoIcon/></div></div>
        
        </div>
      
      <div className="bg-blue-700  rounded-xl p-4 mb-8 text-center cursor-pointer text-white font-semibold  text-2xl hover:bg-blue-900">Let get it done</div>
      </div>

      
      <div className="bg-yellow-400 flex flex-col p-10 justify-between ">
      <div className="mt-10">
        <div>
          <Button mark="<"></Button>
        </div>
        <h1 className="text-3xl font-extrabold text-center pb-10">Friends</h1>
      </div>
      <div className="bg-white p-4 border-2 border-b-8 border-black rounded-2xl flex justify-between">
      <input placeholder="search for love..." className="w-full border-none" ></input>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
</span>
      </div>
    <div className="">
    <Profile name="Bill Rizer" job="Planet Designer" invite={false}></Profile>
    <Profile name="Genbei Yagy" job="Planet Designer" invite={false}></Profile>
    <Profile name="Lancy Neo" job="Rogue Corp" invite={true} ></Profile>
    <Profile name="Hard Cop" job="Planet Designer" invite={false}></Profile>
    <Profile name="Bill Rizer" job="Planet Designer" invite={false}></Profile>
    </div>
    
    </div>

    </div>
    );
};

export default Home