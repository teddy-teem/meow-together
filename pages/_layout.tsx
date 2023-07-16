import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Layout({
  children, // will be a page or nested layout
  currentPath,
}: {
  children: React.ReactNode;
  currentPath: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedNav, setSelectedNav] = useState("home");
  useEffect(() => {
    if (currentPath === "/") {
      setSelectedNav("home");
    }
    if (currentPath === "/dashboard") {
      setSelectedNav("dashboard");
    }
    if (currentPath === "/about") {
      setSelectedNav("about");
    }
  }, [currentPath]);

  return (
    <div className="w-screen">
      <div className="flex flex-col w-full">
        <div className="flex justify-between px-4 w-screen h-12 items-center tracking-widest bg-yellow-100">
          {!menuOpen && (
            <MenuIcon
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            />
          )}
          {menuOpen && (
            <CloseIcon
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            />
          )}
          <div className="flex w-[80%] h-[5vh] flex-row justify-center items-center">
            <h1 className="text-red-700 font-extrabold align-middle">
              Hello Meow
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-[100vw] ">
        {menuOpen && (
          <nav className="flex flex-col justify-between bg-green-400 w-full">
            <div className="divide-y divide-solid">
              <Link href={"/"}>
                <h1
                  className={`py-2 pl-4 ${
                    selectedNav == "home" && "font-semibold"
                  }`}
                >
                  Home
                </h1>
                <hr />
              </Link>
              <Link href={"/dashboard"}>
                <h1
                  className={`py-2 pl-4 ${
                    selectedNav == "dashboard" && "font-semibold"
                  }`}
                >
                  Dashboard
                </h1>
                <hr />
              </Link>
              <Link href={"/about"}>
                <h1
                  className={`py-2 pl-4 ${
                    selectedNav == "about" && "font-semibold"
                  }`}
                >
                  About
                </h1>
              </Link>
            </div>
            <div className=" flex flex-row divide-x divide-solid mb-2">
              <h1 className="py-2 px-2">Fa</h1>
              <h1 className="py-2 px-2">Gm</h1>
              <h1 className="py-2 px-2">Git</h1>
            </div>
          </nav>
        )}
        <div className="mx-4 w-full">
          <main className="h-[90vh] w-full" onClick={()=>{
            setMenuOpen(false);
          }}>{children}</main>
          <footer className="flex flex-row justify-center">hello footer</footer>
        </div>
      </div>
    </div>
  );
}
