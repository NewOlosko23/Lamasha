import React, { useState } from "react";

const Dashboard = () => {
  const [showEmployeeForm, setShowEmployeeForm] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div className="min-h-screen bg-pink-50 p-6 mt-16">
      <h1 className="text-3xl font-bold text-pink-700 mb-6">Admin Dashboard</h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold text-pink-700">Total Staff</h2>
          <p className="text-2xl font-bold text-gray-800 mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold text-pink-700">
            Total Children
          </h2>
          <p className="text-xl font-bold text-gray-800 mt-2">
            35 (18 toddlers, 17 infants)
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold text-pink-700">
            Programs Offered
          </h2>
          <p className="text-md text-gray-800 mt-2">
            Daycare, Pre-school, After-school
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          onClick={() => setShowEmployeeForm(!showEmployeeForm)}
          className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-xl"
        >
          {showEmployeeForm ? "Close" : "Add New Employee"}
        </button>
        <button
          onClick={() => setShowBookingForm(!showBookingForm)}
          className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-xl"
        >
          {showBookingForm ? "Close" : "Book Session"}
        </button>
      </div>

      {/* New Employee Form */}
      {showEmployeeForm && (
        <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
          <h3 className="text-xl font-semibold mb-4 text-pink-700">
            New Employee
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border rounded-xl"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border rounded-xl"
            />
            <input
              type="text"
              placeholder="Role (e.g. Caregiver)"
              className="p-3 border rounded-xl"
            />
            <input
              type="text"
              placeholder="Contact"
              className="p-3 border rounded-xl"
            />
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-xl col-span-full mt-2"
            >
              Save Employee
            </button>
          </form>
        </div>
      )}

      {/* Booking Form */}
      {showBookingForm && (
        <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
          <h3 className="text-xl font-semibold mb-4 text-pink-700">
            Book Session
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Child's Name"
              className="p-3 border rounded-xl"
            />
            <input
              type="text"
              placeholder="Parent's Name"
              className="p-3 border rounded-xl"
            />
            <input
              type="text"
              placeholder="Program (e.g. Pre-school)"
              className="p-3 border rounded-xl"
            />
            <input type="date" className="p-3 border rounded-xl" />
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-xl col-span-full mt-2"
            >
              Book Now
            </button>
          </form>
        </div>
      )}

      {/* Placeholder for employees and bookings list */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Employees List */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-bold text-pink-700 mb-3">Employees</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Jane Doe - Caregiver</li>
            <li>John Smith - Admin</li>
            <li>Grace Wanjiku - Cleaner</li>
          </ul>
        </div>

        {/* Bookings List */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-bold text-pink-700 mb-3">Bookings</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Emily - Pre-school - Aug 12</li>
            <li>Brian - After-school - Aug 14</li>
            <li>Lucy - Daycare - Aug 15</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
