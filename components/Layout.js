import Login from "../pages/login";
import Footer from "./Footer";
import Menu from "./Menu";
import { useContext } from "react";
import { AuthContext } from "../context/context";

const Layout = ({children}) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Login />
  }

  return (
    <div className={"bg-cs-yellow flex flex-row"}>
      <Menu />
        <div className="h-auto w-full mt-5">
          {children}
          <Footer />
        </div>
    </div>
  );
};


export default Layout;
