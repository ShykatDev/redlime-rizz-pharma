import TestimonialCard from "./common/TestimonialCard"

const Testimonial = () => {
  return (
    <div className="">
        <h2 className="font-impact text-center text-light text-[48px]">Hear What <span className="text-golden">Rizz</span> Patients Have To Say</h2>

        <div className="flex justify-center items-center gap-8 mt-[45px]">
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
        </div>
    </div>
  )
}

export default Testimonial