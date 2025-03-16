import Image from "next/image"

const Footer = () => {
    return (
        <div className="mt-[210px] px-10 md:px-20 lg:px-40 pt-10 lg:pt-20 bg-gradient-to-b from-[#3D55CCB2] to-[#1F1F1F1A] backdrop-blur-3xl">
            {/* Top Content */}
            <div className="grid lg:grid-cols-2 space-y-10 items-center gap-10">
                <div className="w-full xl:w-[413px] p-[2px] rounded-xl box">
                    <div className="w-full h-full bg-transparent p-4 lg:py-9 lg:px-10">
                        <h2 className="text-3xl lg:text-[43px] text-center text-light leading-[120%]">Let’s Stay In<br />Touch</h2>
                        <p className="text-center text-light mt-5 mb-7">Keep up to date with our latest news &<br />
                            special offers.</p>

                        <div className="p-3 lg:p-[18px] border rounded-xl border-light flex items-center justify-between">
                            <input type="text" placeholder="enter your email" className="outline-none text-light placeholder:text-light w-4/5" />

                            <Image src="/assets/sent.svg" width={24} height={24} alt="sent" className="shrink-0" />
                        </div>
                    </div>
                </div>
                <div className="w-full text-light flex items-start justify-between lg:justify-start lg:gap-10 xl:gap-32">
                    <div className="flex flex-col gap-[48px] lg:gap-[60px] justify-between">
                        <div>
                            <small className="inline-block mb-[30px]">Quick Links</small>
                            <ul className="space-y-5">
                                <li className="text-sm lg:text-base">Erectile Dysfunction</li>
                                <li className="text-sm lg:text-base">Weight Loss</li>
                                <li className="text-sm lg:text-base">Men’s Hair Loss</li>
                            </ul>
                        </div>
                        <div>
                            <small className="inline-block mb-[30px]">Contact Info</small>
                            <ul className="space-y-5">
                                <li className="flex flex-wrap items-center gap-3">
                                    <Image src="/assets/mail.svg" width={16} height={16} alt="mail" />
                                    <p className="text-sm lg:text-base text-wrap">hello@rizzpharma.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="">
                        <div className="text-end lg:text-left">
                            <small className="inline-block mb-[30px]">Our Company</small>
                            <ul className="space-y-5">
                                <li className="text-sm lg:text-base">HIPAA Notice</li>
                                <li className="text-sm lg:text-base">Privacy Policy</li>
                                <li className="text-sm lg:text-base">Return & Refund Policy</li>
                                <li className="text-sm lg:text-base">Terms Of Use</li>
                                <li className="text-sm lg:text-base">CCPA Opt-Out</li>
                                <li className="text-sm lg:text-base">Opt-Out Preferences</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Content */}
            <div className="mt-[60px] grid lg:grid-cols-2 items-center">
                <Image src="/assets/hipaa.svg" width={200} height={200} alt="hipaa" className="mx-auto lg:mx-0 lg:ml-[100px]" />

                <div className="space-y-[26px] mt-[40px] lg:mt-0">
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                        <button className="bg-[#434B76] size-9 rounded-full flex justify-center items-center">
                            <Image src="/assets/facebook.svg" width={16} height={16} alt="fb" />
                        </button>
                        <button className="bg-[#434B76] size-9 rounded-full flex justify-center items-center">
                            <Image src="/assets/instagram.svg" width={16} height={16} alt="insta" />
                        </button>
                    </div>

                    <div className="flex justify-center lg:justify-start items-center gap-5">
                        <Image src="/assets/hims.svg" width={84} height={84} alt="hims" />
                        <p className="text-light text-sm lg:text-base">Copyright © 2024 Rizz Pharma All Right Reserved - Built by<br/> Business Web Social</p>
                    </div>
                </div>
            </div>

            {/* Bottom Content */}
            <div className="mt-[50px]">
            <Image src="/assets/Branding.svg" alt="branding" width={1920} height={1080} className="opacity-80"/>
            </div>
        </div>
    )
}

export default Footer