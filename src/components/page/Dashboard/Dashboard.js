import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { FiUploadCloud } from 'react-icons/fi'
import { BiUserPlus } from 'react-icons/bi'
import { FaUserGraduate } from 'react-icons/fa'
import { GrProjects } from 'react-icons/gr'
import { Outlet } from "react-router-dom";

import {NavLink,} from 'react-router-dom'
import auth from "../../../firebase.init";
import useAdmins from "../Authontication/useAdmin";
import PageTitle from "../Utilitis/PageTitle";
const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmins(user)
 


  return (
    <div className="">
      <PageTitle title='Dashboard'></PageTitle>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content lg:px-6 py-6 ">
          {/* <!-- Page content here --> */}
          
          <Outlet />
          <div className="flex   justify-end items-top  relative h-12 px-3">
            {/* <label
             
              class="bg-red-500 w-8 border absolute top-[-500px]  rounded-full p-5 drawer-button lg:hidden"
            ></label> */}
             <label  for="my-drawer-2" tabindex="0" className="btn btn-ghost drawer-button lg:hidden  absolute   border bg-slate-100 p-">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
          </div>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu px-4 overflow-y-auto  w-72  bg-base-200 text-base-content">
            {/* <!-- Sidebar content here --> */}

            <div class="flex flex-wrap bg-gray-100 w-full h-screen">
              <div class="w-full bg-white rounded p-3 shadow-lg">
              
                <ul class="space-y-2 text-sm">
               
                  <li>
                    <NavLink
                    to='myorders'
                    
                      class="flex items-center space-x-3 font-medium  text-gray-700 p-2 rounded-md  hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline "
                    >
                      <span class="text-gray-600 ">
                        <svg
                          class="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                      </span>
                      <span className="font-medium">My orders</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                     to="myProfile"
                      class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span class="text-gray-600 text-xl">
                      <FaUserGraduate/>
                      </span>
                      <span className=" font-medium">My profile</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='updateProfile'
                      class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span class="text-gray-600">
                        <svg
                          class="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </span>
                      <span className=" font-medium">Update Profile</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                     to="review"
                      class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span class="text-gray-600">
                        <svg
                          class="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          ></path>
                        </svg>
                      </span>
                      <span className=" font-medium">Add Review</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                     to="help-center"
                      class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span class="text-gray-600">
                        <svg
                          class="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          ></path>
                        </svg>
                      </span>
                      <span className=" font-medium">Help Center & Chat</span>
                    </NavLink>
                  </li>
                 
                 {
                  admin && <>
                   <li>
                    <NavLink
                     to="manageOrder"
                      class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span class="text-gray-600 text-xl">
                       <MdOutlineProductionQuantityLimits/>
                      </span>
                      <span className=" font-medium">Manage Order</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                     to="manageProduct"
                      class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span class="text-gray-600 text-xl">
                     <GrProjects/>
                      </span>
                      <span className=" font-medium">Manage Product</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                     to="productAdd"
                      class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span class="text-gray-600 text-xl">
                       <FiUploadCloud/>
                      </span>
                      <span className=" font-medium">Add Product</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                     to="user"
                      class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span class="text-gray-600 text-2xl">
                       <BiUserPlus/>
                      </span>
                      <span className=" font-medium">User</span>
                    </NavLink>
                  </li>
                  </>
                 }

                 
                 
                
                  <li onClick={() => signOut(auth)}>
                    <span
                    
                      class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span class="text-gray-600 pl-2 px-0">
                        <svg
                          class="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                      </span>
                      <span c>Logout</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
