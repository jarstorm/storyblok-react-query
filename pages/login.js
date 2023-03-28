import { useRouter } from "next/router";
import { useContext } from "react";
import { useMutation } from "react-query";
import { loginUserAction } from "../actions/actions";
import { AuthContext } from "../context/context";


const Login = () => {
    
    const router = useRouter();

    const { setUser } = useContext(AuthContext);

    const { mutate: executeLogin } = useMutation(
      loginUserAction,
      {
        onSuccess: (res) => {
          setUser(res);
          router.push("/");
        },
        onError: (err) => {
          console.log("err", err)
        },
      }
    );

    const login = async () => {
        executeLogin();        
    }

    return (
        <div className="flex justify-center items-center flex-col mt-40">
          <span className="block mb-10">Login page</span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={login}>Login</button>
        </div>
      );
}

export default Login;
  