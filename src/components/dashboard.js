import React, { useEffect, useState } from "react"

const Dashboard = () => {
  return (
    <div className="bg-black bg-opacity-25 rounded-br shadow-lg p-6 lg:p-8">
      <div className="flex -m-3">
        <div className="w-1/4 p-3">
          <div className="bg-green-900 bg-opacity-25 hover:bg-opacity-50 transition duration-100 ease-in-out rounded px-6 py-4 shadow-lg">
            <span className="block mb-1 text-gray-500">Today</span>
            <span className="block text-2xl text-green-400 leading-none font-semibold">+13.89</span>
            <span className="text-green-400">+0.81%</span>
          </div>
        </div>
        <div className="w-1/4 p-3">
          <div className="bg-green-900 bg-opacity-25 hover:bg-opacity-50 transition duration-100 ease-in-out rounded px-6 py-4 shadow-lg">
            <span className="block mb-1 text-gray-500">30 Days</span>
            <span className="block text-2xl text-green-400 leading-none font-semibold">+0.41</span>
            <span className="text-green-400">+0.02%</span>
          </div>
        </div>
        <div className="w-1/4 p-3">
          <div className="bg-green-900 bg-opacity-25 hover:bg-opacity-50 transition duration-100 ease-in-out rounded px-6 py-4 shadow-lg">
            <span className="block mb-1 text-gray-500">6 Months</span>
            <span className="block text-2xl text-green-400 leading-none font-semibold">+249.64</span>
            <span className="text-green-400">+17.01%</span>
          </div>
        </div>
        <div className="w-1/4 p-3">
          <div className="bg-green-900 bg-opacity-25 hover:bg-opacity-50 transition duration-100 ease-in-out rounded px-6 py-4 shadow-lg">
            <span className="block mb-1 text-gray-500">1 Year</span>
            <span className="block text-2xl text-green-400 leading-none font-semibold">+420.54</span>
            <span className="text-green-400">+32.45%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
