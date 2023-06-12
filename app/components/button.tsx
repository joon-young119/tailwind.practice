interface ItemProps {
   mark: string;
    
  }
function cls(...classnames: string[]) {
	return classnames.join("");
}


  
  export default function Button({
    mark,
   
  }: ItemProps) {
    return (
        <div className=" h-16 w-16  rounded-full bg-white cursor-pointer hover:bg-yellow-200  group-hover:bg-red-300  border-2 border-b-8 border-black">
        <h1 className="flex flex-col items-center  text-5xl">{mark}</h1>
        </div>
    );
  }