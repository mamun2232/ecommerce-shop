import React from "react";
import { useState } from "react";
import Loading from "../Utilitis/Loading";
import { AiFillStar } from "react-icons/ai";
import Moment from "react-moment";
const ProductReview = ({ product }) => {
  console.log(product.product.product.reviews.slice(0, 4));
  const [viewAll, setviewAll] = useState(false);
  return (
    <div className="lg:w-4/5 mx-auto  grid grid-cols-2">
      {product.loading && (
        <p>
          <Loading></Loading>
        </p>
      )}
      {!product.loading && product.error ? <p>{product.error}</p> : ""}

      {!product.loading && product?.product?.product ? (
        <div className="col-span-2">
          <div className="relative   min-w-0 break-words bg-white w-full ">
            <div className="">
              <h1 className=" font-medium text-2xl">Product Reviews</h1>

              {viewAll ? (
                <div className=" grid lg:grid-cols-2  grid-cols-1 gap-10 mt-4">
                  {product?.product?.product?.reviews?.map((pro) => (
                    <div
                      key={pro._id}
                      class="flex bg-white shadow-sm border w-full h-44 rounded-lg  "
                    >
                      <div class="flex items-start px-4  py-2 lg:py-6">
                        <img
                          class="w-12 h-12 rounded-full object-cover mr-4 shadow"
                          src={pro?.profileUrl}
                        />
                        <div class="">
                          <div class="flex items-center  justify-between">
                            <h2 class="text-lg font-semibold text-gray-900">
                              {pro?.name}{" "}
                            </h2>
                            <small class="text-sm text-gray-700 n"> 
                            {" "} <Moment fromNow>{pro.time}</Moment></small>
                          </div>
                          <div class="text-gray-700 flex gap-1">
                                  {pro?.rating == 1 && (
                                    <AiFillStar className="text-orange-400" />
                                  )}
                                  {pro?.rating == 2 && (
                                    <>
                                      <AiFillStar className="text-orange-400" />
                                      <AiFillStar className="text-orange-400" />
                                    </>
                                  )}
                                  {pro?.rating == 3 && (
                                    <>
                                      <AiFillStar className="text-orange-400" />
                                      <AiFillStar className="text-orange-400" />{" "}
                                      <AiFillStar className="text-orange-400" />
                                    </>
                                  )}
                                  {pro?.rating == 4 && (
                                    <>
                                      <AiFillStar className="text-orange-400" />
                                      <AiFillStar className="text-orange-400" />{" "}
                                      <AiFillStar className="text-orange-400" />{" "}
                                      <AiFillStar className="text-orange-400" />
                                    </>
                                  )}
                                  {pro?.rating == 5 && (
                                    <>
                                      <AiFillStar className="text-orange-400" />
                                      <AiFillStar className="text-orange-400" />{" "}
                                      <AiFillStar className="text-orange-400" />{" "}
                                      <AiFillStar className="text-orange-400" />{" "}
                                      <AiFillStar className="text-orange-400" />
                                    </>
                                  )}
                                </div>
                          <p class="mt-3 text-gray-700 text-sm">
                            {pro?.comment}
                          </p>
                          <div class="mt-4 flex items-center">
                            <div class="flex mr-2 text-gray-700 text-sm mr-3">
                              <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                class="w-4 h-4 mr-1"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                              </svg>
                              <span>0</span>
                            </div>
                            <div class="flex mr-2 text-gray-700 text-sm mr-8">
                              <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                class="w-4 h-4 mr-1"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                />
                              </svg>
                              <span>0</span>
                            </div>
                            <div class="flex mr-2 text-gray-700 text-sm mr-4">
                              <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                class="w-4 h-4 mr-1"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                />
                              </svg>
                              <span>share</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className={
                    product?.product?.product?.reviews.length == 0
                      ? "block"
                      : "grid lg:grid-cols-2 grid-cols-1 gap-10 mt-4 "
                  }
                >
                  {product?.product?.product?.reviews.length == 0 ? (
                    <div className="text-4xl text-[#EC255A] font-medium flex h-[400px] justify-center items-center">
                      <h3 className="">NO Reviews Here</h3>
                    </div>
                  ) : (
                    <>
                      {product?.product?.product?.reviews
                        ?.slice(0, 4)
                        .map((pro) => (
                          <div
                            key={pro._id}
                            class="flex bg-white shadow-sm border w-full h-44 rounded-lg  "
                          >
                            <div class="flex items-start px-4 py-2 lg:py-6">
                              <img
                                class="w-12 h-12 rounded-full object-cover mr-4 shadow"
                                src={pro?.profileUrl}
                                alt="avatar"
                              />
                              <div class="">
                                <div class="flex items-center justify-between">
                                  <h2 class="text-lg font-semibold text-gray-900 ">
                                    {pro?.name}{" "}
                                  </h2>
                                  <small class="text-sm text-gray-700">
                                  <Moment fromNow>{pro.time}</Moment>
                                  </small>
                                </div>
                                <div class="text-gray-700 flex gap-1">
                                  {pro?.rating == 1 && (
                                    <AiFillStar className="text-orange-400" />
                                  )}
                                  {pro?.rating == 2 && (
                                    <>
                                      <AiFillStar className="text-orange-400" />
                                      <AiFillStar className="text-orange-400" />
                                    </>
                                  )}
                                  {pro?.rating == 3 && (
                                    <>
                                      <AiFillStar className="text-orange-400" />
                                      <AiFillStar className="text-orange-400" />{" "}
                                      <AiFillStar className="text-orange-400" />
                                    </>
                                  )}
                                  {pro?.rating == 4 && (
                                    <>
                                      <AiFillStar className="text-orange-400" />
                                      <AiFillStar className="text-orange-400" />{" "}
                                      <AiFillStar className="text-orange-400" />{" "}
                                      <AiFillStar className="text-orange-400" />
                                    </>
                                  )}
                                  {pro?.rating == 5 && (
                                    <>
                                      <AiFillStar className="text-orange-400" />
                                      <AiFillStar className="text-orange-400" />{" "}
                                      <AiFillStar className="text-orange-400" />{" "}
                                      <AiFillStar className="text-orange-400" />{" "}
                                      <AiFillStar className="text-orange-400" />
                                    </>
                                  )}
                                </div>
                                <p class="mt-3 text-gray-700 text-sm">
                                  {pro?.comment}
                                </p>
                                <div class="mt-4 flex items-center">
                                  <div class="flex mr-2 text-gray-700  text-sm mr-3">
                                    <svg
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      class="w-4 h-4 mr-1"
                                      stroke="currentColor"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                      />
                                    </svg>
                                    <span>0</span>
                                  </div>
                                  <div class="flex mr-2 text-gray-700 text-sm mr-8">
                                    <svg
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      class="w-4 h-4 mr-1"
                                      stroke="currentColor"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                      />
                                    </svg>
                                    <span>0</span>
                                  </div>
                                  <div class="flex mr-2 text-gray-700 text-sm mr-4">
                                    <svg
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      class="w-4 h-4 mr-1"
                                      stroke="currentColor"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                      />
                                    </svg>
                                    <span>share</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </>
                  )}
                </div>
              )}

              {product.product.product.reviews.length >= 4 && (
                <div className="text-right mt-2">
                  <button
                    onClick={() => setviewAll(true)}
                    className="bg-[#062C30]  text-white px-4 py-2 rounded-lg"
                  >
                    More Review
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductReview;
