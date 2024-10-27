import React from "react";

export default function Achievements() {
  return (
    <div>
      <div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-10 md:mt-20">
          <h2 className="text-4xl font-bold text-center mb-6">
            Over{" "}
            <span className="text-indigo-600">5,000 AR Projects Completed</span>
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Our students have successfully developed innovative AR solutions,
            pushing the boundaries of technology.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3">
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center bg-indigo-600 py-10 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-white">2,000+</div>
              <div className="text-white pt-2">Graduates</div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center bg-indigo-600 py-10 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-white">1,500+</div>
              <div className="text-white pt-2">AR Applications Developed</div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center bg-indigo-600 py-10 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-white">100+</div>
              <div className="text-white pt-2">
                Collaborations with Industry Leaders
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
