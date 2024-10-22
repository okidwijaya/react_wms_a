"use client";
import React, { useState } from "react";

function page() {
  const [customer, setCustomer] = useState("");
  const [category, setCategory] = useState("");
  const [vendor, setVendor] = useState("");
  const [notes, setNotes] = useState('');

  return (
    <div className="text-mediumBlack px-4 pb-28 pt-4 max-w-full mt-0 h-full overflow-x-hidden overflow-y-scroll">
      <h2 className="hidden">Draft Order</h2>

      <div className="w-full max-w-[500px] py-2 mb-4 mt-2 px-4 grid grid-cols-1 gap-2 rounded-md bg-white">
        <p className="mb-0 mt-2 text-sm font-semibold">Inventory</p>
        <div className="grid grid-cols-1 gap-2">
          <div className="grid grid-cols-1 gap-2">
            <label className="mb-0 mt-0 text-sm">Quantity</label>
            <input
              className="px-2 py-1 w-full border border-[#121212] rounded-md"
              type="text"
              required
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="mb-0 mt-0 text-sm">Product Name</label>
            <input
              className="px-2 py-1 w-full border border-[#121212] rounded-md"
              type="text"
              required
              name="vendor"
              value={vendor}
              onChange={(e) => setVendor(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="mb-0 mt-0 text-sm">Warehouse</label>
            <input
              className="px-2 py-1 w-full border border-[#121212] rounded-md"
              type="text"
              required
              name="vendor"
              value={vendor}
              onChange={(e) => setVendor(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="mb-0 mt-0 text-sm">Date</label>
            <input
              className="px-2 py-1 w-full border border-[#121212] rounded-md"
              type="text"
              required
              name="vendor"
              value={vendor}
              onChange={(e) => setVendor(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className='w-fit pb-2 pt-0 px-2 grid grid-cols-1 gap-4'>
          <div className='w-full max-w-72 py-2 px-4 rounded-md bg-white'>
              <label className="mb-2 mt-2 text-sm font-semibold">Customer</label>
              <input
                className="px-2 py-1 w-full border border-[#121212] rounded-md"
                type="text"
                placeholder='Select Customer'
                required
                name="customer"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
              />
          </div>      

          <div className='w-full max-w-72 py-2 px-4 rounded-md bg-white'>
              <label className="mb-2 mt-2 text-sm font-semibold">Notes</label>
              <input
                className="px-2 py-1 w-full border border-[#121212] rounded-md"
                type="text"
                placeholder='Add Notes'
                required
                name="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
          </div>
        </div>

      <div className="flex w-fit flex-row justify-start items-end content-between gap-2 ml-4 mr-auto">
        <button className="py-1 px-3 text-sm border-bgBase border text-bgBase rounded-md">
          Cancel
        </button>
        <button className="py-1 px-3 text-sm border-bgBase border bg-bgBase text-textBase rounded-md">
          Save
        </button>
      </div>
    </div>
  );
}

export default page;
