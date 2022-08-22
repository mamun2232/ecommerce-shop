import React from 'react';

const Pagination = () => {
      return (
            
            
        <div class="flex justify-center">
        <a href="#" class="px-4 py-2 mx-1  capitalize  rounded-md cursor-not-allowed  bg-red-400  text-white">
            <div class="flex items-center -mx-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>

                <span class="mx-1">
                    previous
                </span>
            </div>
        </a>

        <a href="#" class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
            1
        </a>

        <a href="#" class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
            2
        </a>

        <a href="#" class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
            3
        </a>

        <a href="#" class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
            4
        </a>

        <a href="#" class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
            5
        </a>

        <a href="#" class="px-4 py-2 mx-1 text-white transition-colors duration-200 transform rounded-md  bg-red-400 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
            <div class="flex items-center-mx-1">
                <span class="mx-1">
                    Next
                </span>
                
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
        </a>
    </div>
      );
};

export default Pagination;