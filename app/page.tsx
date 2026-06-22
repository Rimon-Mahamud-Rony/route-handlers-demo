
import { GrCodeSandbox } from "react-icons/gr";

export default function Home() {
  return (
    <div className="w-full flex flex-col flex-1 items-center justify-center bg-linear-to-br from-cyan-900 via-slate-400 to-cyan-900 text-black">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="p-4 w-1/2 text-white  hover:bg-slate-400 rounded-md shadow-md shadow-green-300 border border-green-200 cursor-pointer">
          <div className="flex flex-row justify-center px-10 gap-x-2">
            <div>
              <GrCodeSandbox className="h-16 w-20 text-green-800" />
            </div>
            <div className="flex flex-col justify-center items-center h-auto">
              <p className="text-center text-2xl text-green-800">
                Route Handler Demo 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
