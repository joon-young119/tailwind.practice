import Button from "./button";
interface ItemProps {
    name: string;
    job: string;
    invite: boolean;
   
  }
  function cls(...classnames: string[]) {
      return classnames.join("");
  }
  
  export default function Profile({
    name,
    job,
    invite,
    
   
  }: ItemProps) {
    return (
        <div className={` flex  px-4 pt-5  my-6  border-2   border-gray-800 rounded-xl bg-white `}>
          <div className="w-20 h-20 rounded-full bg-slate-400"/>
            <div className="mx-2 pb-6 pt-2 ">
              <h3 className=" px-4 text-2xl font-bold text-gray-900">{name}</h3>
              <span className=" px-2 mt-1 font-bold text-gray-900">{job}</span>
            </div>
          <div className={`${invite===true?"bg-gray-800 hover:bg-black   text-white":"bg-yellow-300 hover:bg-yellow-500"} cursor-pointer  w-24 h-12 py-2 mt-2  text-center border-2 border-b-8 border-black rounded-2xl`}>
      <span className="right-5 text-xl font-semibold">{invite===true?"Invited":"Invite"}</span>
      </div>
        </div>
    );
  }