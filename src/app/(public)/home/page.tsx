import Image from "next/image";
import banner from "@/images/banner.jpeg";
import PhotosCarouselComponent from "@/app/components/PhotoCarousel";
import ContentCarouselComponent from "@/app/components/ContentCarousel";
import TreatmentsComponent from "@/app/components/Treatments";

export default function HomePage() {
  return (
    <>
      <section className="w-full h-auto md:min-h-[900px]  ">
        <div className="relative">
          <Image src={banner} alt="banner" className="w-full h-auto" />
          <div className="hidden md:block absolute w-[856px] h-[319px] top-[524px] left-[52px]">
            <p className="text-[64px] text-[#F4F4F4] font-medium leading-[76.8px] h-[231px]">
              Unveil Your Best Self with Cosmedix Clinics’ Expert Care and
              Cutting-Edge Treatments
            </p>
            <div className="absolute w-[120px] h-[64px] pt-4">
              <button
                type="button"
                className="w-[120px] h-[48px] border-[#F4F4F4] border-[2px] px-6 py-3 text-white capitalize rounded-[100px]"
              >
                <p className="text-[14px] leading-[24px] font-medium">
                  book now
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-h-[706.21px] mt-[200px]">
        <TreatmentsComponent />
      </section>

      <section
        id="concerns"
        className="w-full max-h-[1144px] py-[112px] px-[64px] mt-[400px] md:mt-0"
      >
        <h1 className="text-[64px] font-medium leading-[76.8px]">Concerns</h1>
        <p className="text-[18px] leading-[27px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <PhotosCarouselComponent />
      </section>

      <section className="w-full h-[626px] bg-[#CDBCAB] z-0 flex flex-col justify-center items-center">
        <ContentCarouselComponent />
      </section>
    </>
  );
}
