import Image from "next/image";

const ProductCard = ({ product, index }) => {
    const { title, thumbnail, price } = product;


    return (
        <div className="bg-[#31418C4D] rounded-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 z-10">
                {index % 3 !== 0 ?
                    <p className="w-fit px-4 py-1.5 bg-linear-to-l from-[#A75356] to-[#D78C6C] rounded-bl-xl rounded-tr-xl text-light">Research use only</p>
                    :
                    <p className="w-fit px-4 py-1.5 bg-linear-to-l from-[#6c221d71] to-[#9541396c] border-l border-b border-[#A75356] bg rounded-bl-xl rounded-tr-xl text-light">Recurring Plan</p>
                }

            </div>
            <div className="pt-6 px-4 flex justify-between items-center gap-6">
                <div className="w-[250px] h-[180px] relative">
                    <Image src={thumbnail} fill alt={`product`} className="object-cover"/>
                </div>
                <p className="text-transparent bg-clip-text text-lg font-bold leading-[120%] bg-linear-to-b from-[#C1842D] to-[#ECC974] inline-block">{title}</p>
            </div>

            <div className="bg-[#1F1F1F4D] pl-6 flex justify-between items-center">
                <p className="text-light text-xs">Starting at ${price}</p>
                <button className="px-8 py-5 bg-linear-to-b from-[#C1842D] to-[#ECC974]">
                    <Image src={`/assets/add_cart.svg`} width={24} height={24} alt="cart-add" />
                </button>
            </div>

        </div>
    )
}

export default ProductCard