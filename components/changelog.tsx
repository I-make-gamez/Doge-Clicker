import { FaSearch } from "react-icons/fa";
// import { useRouter } from "next/navigation";

interface UserSearchProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Changelog({ show, setShow }: UserSearchProps) {
  //   const router = useRouter();

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className="fixed text-black top-0 left-0 h-screen w-screen z-50 flex flex-col items-center justify-center">
          <div className="w-[50vw] h-[70vh] flex flex-col justify-center items-center bg-white border-[7px] border-black">
            <div className="w-full bg-gradient-radial to-[#bb1010] from-[#ff0000]">
              <h1 className="text-black text-2xl py-3 border-b-[7px] border-black">
                Changelog
              </h1>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center w-full h-full bg-gradient-radial to-[#08fbff] from-[#0076ff]">
                <h1>Changelog</h1>
            </div>
            <button
              className="text-black text-xl py-3 border-t-[7px] border-black w-full"
              onClick={handleClose}
            >
              Close
            </button>
            {/* Your search content goes here */}
          </div>
        </div>
      )}
    </>
  );
}
