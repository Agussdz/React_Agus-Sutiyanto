import React from "react";

function Features() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-10 md:mt-20">
      <h2 className="text-4xl font-bold text-center mb-6">
        <span className="text-indigo-600">ARedu</span> Features
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Dapatkan benefit seumur hidup dengan bergabung dengan kami
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Fitur 1 */}
        <div className="flex flex-col items-center text-center bg-slate-100 py-10 rounded-lg shadow-md">
          <div className="flex justify-center items-center bg-indigo-600 text-white w-20 h-20 rounded-full mb-2">
            <svg
              className="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
              />
            </svg>
          </div>
          <h3 className="font-bold text-lg pt-2">Materi Terupdate</h3>
          <p className="text-gray-500 text-sm px-10 pt-2">
            Materi yang sesuai dengan kebutuhan industri dan teknologi terbaru
          </p>
        </div>

        {/* Fitur 2 */}
        <div className="flex flex-col items-center text-center bg-slate-100 py-10 rounded-lg shadow-md">
          <div className="flex justify-center items-center bg-indigo-600 text-white w-20 h-20 rounded-full mb-2">
            <svg
              className="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="#ffffff"
                d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"
              />
            </svg>
          </div>
          <h3 className="font-bold text-lg pt-2">Video Interaktif</h3>
          <p className="text-gray-500 text-sm pt-2 px-10">
            Akses video pembelajaran interaktif, Up-to-Date, dan ramah bagi
            pemula
          </p>
        </div>

        {/* Fitur 3 */}
        <div className="flex flex-col items-center text-center bg-slate-100 py-10 rounded-lg shadow-md">
          <div className="flex justify-center items-center bg-indigo-600 text-white w-20 h-20 rounded-full mb-2">
            <svg
              className="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="#ffffff"
                d="M88.7 223.8L0 375.8 0 96C0 60.7 28.7 32 64 32l117.5 0c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7L416 96c35.3 0 64 28.7 64 64l0 32-336 0c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224l400 0c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480L32 480c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"
              />
            </svg>
          </div>
          <h3 className="font-bold text-lg pt-2">Akses Aset 3d</h3>
          <p className="text-gray-500 text-sm px-10 pt-2">
            Dapatkan akses aset 3D tanpa batas yang dilengkapi dengan animasi
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
