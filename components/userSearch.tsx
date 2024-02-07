import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface UserSearchProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function UserSearch({ show, setShow }: UserSearchProps) {
  const router = useRouter();

  const handleClose = () => {
    setShow(false);
  };

  async function searchUser(formData: FormData) {
    const rawFormData = {
      username: formData.get("username"),
    };

    router.replace(`/user/${rawFormData.username}`);
  }

  return (
    <>
      {show && (
        <div className="fixed text-black top-0 left-0 h-screen w-screen z-50 flex flex-col items-center justify-center">
          <div className="w-[50vw] h-[70vh] flex flex-col justify-center items-center bg-white border-[7px] border-black">
            <div className="w-full bg-gradient-radial to-[#bb1010] from-[#ff0000]">
              <h1 className="text-black text-2xl py-3 border-b-[7px] border-black">
                User Search
              </h1>
            </div>
            <form
              action={searchUser}
              className="flex-1 flex flex-col items-center justify-center w-full h-full bg-gradient-radial to-[#08fbff] from-[#0076ff]"
            >
              <input
                type="text"
                name="username"
                id="userInput"
                spellCheck={false}
                className="h-10 w-[70%] text-lg rounded placeholder:text-black px-5 border-[2px] my-2 border-white focus:outline-none focus:border-black"
                placeholder="Enter a username"
              />
              <button className="flex h-10 w-32 bg-white flex-row items-center border-[2px] border-white focus:outline-none hover:border-black active:border-white rounded justify-center align-center gap-2">
                <h1 className="text-lg">Search</h1> <FaSearch />
              </button>
            </form>
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
