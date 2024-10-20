import React from "react";
import items from "../data/item";

function ListItem() {
  return (
    <div className="mt-10 max-w-screen-xl mx-auto px-4 sm:px-8">
      <h2 className="text-4xl font-bold text-center mb-6">
        Best Quality <span className="text-indigo-600">Course</span>
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Pilih kursus Augmented Reality yang menarik bagi anda
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto"
          >
            <a href={item.link}>
              <img
                className="rounded-t-lg h-48 w-full object-cover"
                src={item.image}
                alt={item.title}
              />
            </a>
            <div className="p-5">
              <a href={item.link}>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
              <a
                href={item.link}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListItem;
