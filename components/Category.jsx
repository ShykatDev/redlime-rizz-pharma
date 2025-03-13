
const Category = () => {
    return (
        <div className="mt-[72px] px-40">
            <h2 className="font-impact text-center text-light text-[48px]">Shop by <span className="text-golden">Category</span></h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                <div className="flex flex-col gap-[30px]">
                    <div className="w-full h-[550px] bg-red-100 rounded-3xl"></div>
                    <div className="w-full h-[400px] bg-red-100 rounded-3xl"></div>
                </div>
                <div className="flex flex-col gap-[30px]">
                    <div className="w-full h-[400px] bg-red-100 rounded-3xl"></div>
                    <div className="w-full h-[550px] bg-red-100 rounded-3xl"></div>
                </div>
                <div className="flex flex-col gap-[30px]">
                    <div className="w-full h-[550px] bg-red-100 rounded-3xl"></div>
                    <div className="w-full h-[400px] bg-red-100 rounded-3xl"></div>
                </div>
            </div>
        </div>
    )
}

export default Category