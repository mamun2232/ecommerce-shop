import React from "react";
import { useNavigate } from "react-router-dom";

const Discount = () => {
const navigate = useNavigate()
  return (
    <div className="max-w-7xl m-auto px-2 my-10 ">
      <div className="grid lg:grid-cols-3 gird-cols-1 gap-5">
        <div class="card  bg-base-100  discount">
          <div class="h-52 flex items-center pl-5">
            <div className=" ">
              <h2 class="text-2xl font-medium">Fashion's </h2>
              <p className="text-xl">
                Starting At <span>$29</span>
              </p>

              <div className="mt-2">
                <button onClick={()=> navigate("/view/all/product")} class="py-2 px-3 text-white bg-[#062C30]  rounded-lg">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="card  bg-base-100  discount1">
          <div class="h-52 flex items-center pl-5">
            <div className=" ">
              <h2 class="text-2xl font-medium text-white">GET 40%
                                        ENTIRE ORDER!</h2>
              <p className="text-xl text-white">
              Black Friday Sale
              </p>

              <div className="mt-2">
                <button onClick={()=> navigate("/view/all/product")} class="py-2 px-3 text-white bg-[#062C30]  rounded-lg">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="card  bg-base-100  discount2">
          <div class="h-52 flex items-center pl-5">
            <div className=" ">
              <h2 class="text-2xl font-medium">Smart Tshart</h2>
              <p className="text-xl">
                Discount Abalivabe<span>33%</span>
              </p>

              <div className="mt-2">
                <button onClick={()=> navigate("/view/all/product")} class="py-2 px-3 text-white bg-[#062C30]  rounded-lg">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
