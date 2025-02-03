import Image from "next/image";
import banner from "@/images/banner.jpeg";
import serum from "@/images/serum.jpeg";
import discuss from "@/images/discuss.png";
import PhotosCarouselComponent from "@/app/components/Carousel";
import ContentCarouselComponent from "@/app/components/ContentCarousel";

export default function HomePage() {
  return (
    <>
      <section className="w-full h-[900px]  ">
        <div className="relative">
          <Image src={banner} alt="banner" className="w-full h-auto" />
          <div className="absolute w-[856px] h-[319px] top-[524px] left-[52px]">
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

      <section className="w-full h-[706.21px] mt-[200px]">
        <div className="max-w-[1312px] max-h-[482.21px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="min-w-[669.2px] min-h-[482.21px] flex flex-col p-6 border-t-[1px] border-s-[1px] border-b-[1px] rounded-bl-[100px] border-[#434343] ">
              <p className="font-normal text-[48px] leading-[57.6px] mb-4">
                Specialise in non-surgical corrective and cosmetic treatments
              </p>
              <div className="flex justify-between items-end">
                <p className="text-[48px] font-normal leading-[57.6px] mr-4">
                  1
                </p>
                <Image
                  src={serum}
                  alt="serum"
                  className="w-[288.59px] h-[234.11px] rounded-xl"
                />
              </div>
            </div>
            <div className="min-w-[669.2px] min-h-[482.21px] flex flex-col p-6 border-t-[1px] border-s-[1px] border-b-[1px] rounded-bl-[100px] border-[#434343] ">
              <p className="font-normal text-[48px] leading-[57.6px] mb-4">
                Option between In-Clinic and Virtual Consultation
              </p>
              <div className="flex justify-between items-end">
                <p className="text-[48px] font-normal leading-[57.6px] mr-4">
                  2
                </p>
                <Image
                  src={discuss}
                  alt="discuss"
                  className="w-[288.59px] h-[234.11px] rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="concerns"
        className="w-full max-h-[1144px] py-[112px] px-[64px]"
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
