export default function Dashboard() {
    return (
        <div className="text-[#121212] w-full max-w-full py-4 px-4">
            <div className="text-[#121212] grid grid-cols-2 w-full max-w-full">
                <h2 className="text-[#121212] text-xl font-semibold">Welcome</h2>
                <div className="hidden flex w-fit flex-row justify-end items-end content-between gap-2 ml-auto mr-0">
                    <button className="py-1 px-3 text-sm border-bgBase border text-bgBase rounded-md">
                        Account
                    </button>
                    <button className="py-1 px-3 text-sm border-bgBase border bg-bgBase text-textBase rounded-md">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}