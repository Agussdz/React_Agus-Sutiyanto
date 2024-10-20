import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData((prevData) => [...prevData, formData]);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="grid sm:grid-cols-2 items-start gap-16 p-4 sm:px-8 py-10 md:mt-15 max-w-screen-xl mx-auto px-4 bg-white font-[sans-serif]">
      <div>
        <h1 className="text-gray-800 text-3xl font-extrabold">
          Contact <span className="text-indigo-600">Us</span>
        </h1>
        <p className="text-sm text-gray-500 mt-4">
          Jika anda tertarik atau memiliki pertanyaan, kami siap membantu anda,
          isi form disamping atau kontak email kami
        </p>

        <div className="mt-12">
          <h2 className="text-gray-800 text-base font-bold">Email</h2>
          <ul className="mt-4">
            <li className="flex items-center">
              <a
                href="mailto:ARedu@gmail.com"
                className="text-indigo-600 text-sm"
              >
                <small className="block">Mail</small>
                <strong>ARedu@gmail.com</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="ml-auto space-y-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
          required
        />
        <textarea
          name="message"
          placeholder="Pesan"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"
          required
        />
        <button
          type="submit"
          className="text-white bg-indigo-600 hover:bg-indigo-700 tracking-wide rounded-md text-sm px-4 py-3 w-full mt-6"
        >
          Submit
        </button>
      </form>

      {submittedData.length > 0 && (
        <div className="mt-8 col-span-2">
          <h3 className="text-lg font-bold mb-2">Data Pesan:</h3>
          <div className="overflow-x-auto bg-gray-100 rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-indigo-600">
                <tr>
                  <th className="px-4 py-2 text-left text-white">No</th>
                  <th className="px-4 py-2 text-left text-white">First Name</th>
                  <th className="px-4 py-2 text-left text-white">Last Name</th>
                  <th className="px-4 py-2 text-left text-white">Email</th>
                  <th className="px-4 py-2 text-left text-white">Pesan</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {submittedData.map((data, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{data.firstName}</td>
                    <td className="px-4 py-2">{data.lastName}</td>
                    <td className="px-4 py-2">{data.email}</td>
                    <td className="px-4 py-2">{data.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
