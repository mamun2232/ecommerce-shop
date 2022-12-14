import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { BiLockOpenAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import SocialLogin from "./SocialLogin";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector, } from "react-redux";
import { postUser } from "../Futurecher/Slice/createUserSlice";
import axios from "axios";
import Loading from "../Utilitis/Loading";
import sendToken from "../Utilitis/sendToken";
import { fetchUserAvater } from "../Futurecher/Slice/userProSlice";

const Reg = () => {
  const [token, setToken] = useState("");
  const userId = localStorage.getItem("UserId");
  const [avatar, setAvatar] = useState(
    "https://www.valleverdecountryclub.com/wp-content/uploads/2022/04/istockphoto-610003972-612x612-2.jpg"
  );
  const [cover , setCover] = useState("https://cdn.digitbin.com/wp-content/uploads/Why-I-am-Seeing-Blank-Facebook-Profile-and-How-to-Fix-it.jpg")
  const disPatch = useDispatch()
  const [user, loadings, error] = useAuthState(auth);

  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // create user hook
  const [createUserWithEmailAndPassword, Cuser, loading, Cerror] =
    useCreateUserWithEmailAndPassword(auth);
  // update fofile hook
  const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
  const [updateProfile, updating, Uerror] = useUpdateProfile(auth);
  const users = useSelector((state) => state.user);

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });

    const myForm = new FormData();
    myForm.append("name", data.name);
    myForm.append("email", data.email);
    myForm.append("avatar", avatar);
    myForm.append("cover", cover);
    sendToken(myForm );
    setToken(localStorage.getItem("UserToken"));
  };

  let errorMessage;
  if (Cerror || Uerror || Gerror) {
    errorMessage = (
      <p className="text-red-500">
        {Cerror?.message || Uerror?.message || Gerror?.message}
      </p>
    );
  }

  if (Guser) {
    const myForm = new FormData();
    myForm.append("name", user?.displayName);
    myForm.append("email", user?.email);
    myForm.append("avatar", user?.photoURL);
    myForm.append("cover", cover)
    sendToken(myForm);
    setToken(localStorage.getItem("UserToken"));
  }
 
  if (user) {
    navigate("/");
    if(userId){
      disPatch(fetchUserAvater(userId));

    }
    
  }

  return (
    <div class="w-full max-w-sm py-6 px-4 m-auto bg-white ">
      {/* <h1 class="text-xl font-medium text-center text-black">Smart Eccomarce</h1> */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <div className="border p-2   w-9 rounded absolute top-[32px] left-1 text-[#EC255A]">
            <CgProfile />
          </div>
          <label for="username" class="block text-sm text-black">
            Name
          </label>

          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
            type="text"
            placeholder="Name"
            class="block pl-12 w-full px-4 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
          />
          <label class="label">
            {errors.name?.type === "required" && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </label>
        </div>
        <div className="relative mt-2">
          <div className="border p-2   w-9 rounded absolute top-[32px] left-1 text-[#EC255A]">
            <AiOutlineMail />
          </div>
          <label for="username" class="block text-sm text-black">
            Email & Username
          </label>

          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
            })}
            type="email"
            placeholder="Email address"
            class="block pl-12 w-full px-4 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
          />

          <label class="label">
            {errors.email?.type === "required" && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </label>
        </div>

        <div class="mt-2">
          <div class="flex items-center justify-between relative">
            <div className="border p-2   w-9 rounded absolute top-[32px] left-1 text-[#EC255A]">
              <BiLockOpenAlt />
            </div>
            <label for="password" class="block text-sm text-black ">
              Password
            </label>
          </div>

          <input
            {...register("password", {
              required: {
                value: true,
                message: "Password is Required",
              },
              minLength: {
                value: 6,
                message: "Must be 6 characters or longer",
              },
            })}
            type="password"
            placeholder="Password"
            class="block w-full px-4 py-2 mt-2 pl-12  bg-white border rounded-md   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          <label class="label">
            {errors.password?.type === "required" && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </label>
        </div>

        <div class="mt-4">
          <input
            type="submit"
            value="Sign Up"
            class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#062C30] rounded-md"
          />
          {errorMessage}
        </div>
      </form>

      <SocialLogin signInWithGoogle={signInWithGoogle}></SocialLogin>

     
    </div>
  );
};

export default Reg;
