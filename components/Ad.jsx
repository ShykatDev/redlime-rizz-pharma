import Image from "next/image"

const Ad = () => {
    return (
        <div className='my-[160px] h-auto relative block'>
            <Image alt="ad" src="/assets/ad.svg" width={1920} height={812} className="z-0" />

            <div className="absolute w-full top-24 z-10 grid grid-cols-2 px-40">
                <div>
                    <h2 className="text-light font-impact text-[58px]  leading-none">100% Online,<br/>100% Convenient</h2>
                </div>
                <ul className="space-y-5">
                    <li className="flex items-center gap-[30px]">
                        <Image src="/assets/pointer.svg" width={24} height={24} alt="pointer" />
                        <p className="text-lg text-light font-bold">Chat with a provider 24/7</p>
                    </li>
                    <li className="flex items-center gap-[30px]">
                        <Image src="/assets/pointer.svg" width={24} height={24} alt="pointer" />
                        <p className="text-lg text-light font-bold">Fast, discreet shipping</p>
                    </li>
                    <li className="flex items-center gap-[30px]">
                        <Image src="/assets/pointer.svg" width={24} height={24} alt="pointer" />
                        <p className="text-lg text-light font-bold">Clinically proven ingredients and FDA-approved treatments.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Ad