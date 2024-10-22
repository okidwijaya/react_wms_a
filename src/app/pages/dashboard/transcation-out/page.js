import IconComponent from "@/app/components/IconComponent";
import React from "react";

function page() {
  return (
    <div className="text-[#121212] w-full max-w-full py-6 px-8">
      <div className="text-[#121212] grid grid-cols-2 w-full max-w-full">
        <h2 className="text-[#121212] text-xl font-semibold">Orders</h2>
        <div className="flex w-fit flex-row justify-end items-end content-between gap-2 ml-auto mr-0">
          <button className="py-1 px-3 text-sm border-bgBase border text-bgBase rounded-md">
            Export
          </button>
          <button className="py-1 px-3 text-sm border-bgBase border text-bgBase rounded-md">
            More Action
          </button>
          <button className="py-1 px-3 text-sm bg-bgBase text-textBase rounded-md">
            Crete Order
          </button>
        </div>
      </div>

      <div className="text-[#121212] rounded-md border border-lightGrey mt-8">
        <div className="border-b boder-b-lightGrey pb-4 pt-2 grid grid-cols-2 w-full max-w-full justify-between">
          <div className="px-2 flex w-full flex-row justify-start items-start gap-2 ml-auto mr-0">
            <button className="border-mediumBlack py-1 px-2 text-sm border text-bgBase rounded-md">
              All
            </button>
            <button className="py-1 px-2 text-sm border-bgSecondary border text-bgBase rounded-md">
              Unfulfilled
            </button>
            <button className="py-1 px-2 text-sm border-bgSecondary border text-bgBase rounded-md">
              Unpaid
            </button>
            <button className="py-1 px-2 text-sm border-bgSecondary border text-bgBase rounded-md">
              Open
            </button>
            <button className="py-1 px-2 text-sm border-bgSecondary border text-bgBase rounded-md">
              Archived
            </button>
          </div>
          <div className="flex px-2 flex-row justify-end items-center gap-2">
            <button className="w-fit text-sm order-bgSecondary border border-mediumBlack p-1 rounded-md">
              <IconComponent
                name="IoMdSearch"
                size="16px"
                color="#121212"
                className="w-fit"
              />
            </button>
            <button className="w-fit text-sm order-bgSecondary border border-mediumBlack p-1 rounded-md">
              <IconComponent
                name="BiSortAlt2"
                size="16px"
                color="#121212"
                className="w-fit"
              />
            </button>
          </div>
        </div>

        <div className="w-full overflow-x-scroll">
          <div className="px-2 border-b boder-b-lightGrey py-2 overflow-x-scroll w-full max-w-full grid grid-cols-[60px_100px_150px_150px_200px_200px_150px_150px]">
            <div className="flex gap-2 flex-row justify-start items-center">
              <IconComponent
                name="MdCheckBoxOutlineBlank"
                size="16px"
                color="#121212"
                className="w-fit"
              />
              <p className="text-sm">Order</p>
            </div>
            <p className="text-sm">Date</p>
            <p className="text-sm">Customer</p>
            <p className="text-sm">Total</p>
            <p className="text-sm">Payment status</p>
            <p className="text-sm">Fulfillment status</p>
            <p className="text-sm">Delivery status</p>
          </div>

          <div className="w-full">
            <div className="px-2 py-2 bg-lightGrey overflow-x-scroll w-full max-w-full grid grid-cols-[60px_100px_150px_150px_200px_200px_150px_150px]">
              <div className="flex gap-2 flex-row justify-start items-center">
                <IconComponent
                  name="MdCheckBoxOutlineBlank"
                  size="16px"
                  color="#121212"
                  className="w-fit"
                />
                <p className="text-sm">1001</p>
              </div>
              <p className="text-sm">23-09-2024</p>
              <p className="text-sm">John Smith</p>
              <p className="text-sm">Rp.23000</p>
              <p className="text-sm">Paid</p>
              <p className="text-sm">Unfulfilled</p>
              <p className="text-sm">Packed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
