import Image from "next/image";
import serum from "@/images/serum.jpeg";
import discuss from "@/images/discuss.png";

export default function TreatmentsComponent() {
  return (
    <>
      <div className="max-w-[1312px] max-h-[482.21px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mx-4 md:mx-0 max-w-[669.2px] max-h-[482.21px] flex flex-col p-6 border-t-[1px] border-s-[1px] border-b-[1px] rounded-bl-[100px] border-[#434343] ">
            <p className="font-normal text-[30px] md:text-[48px] leading-[57.6px] mb-4">
              Specialise in non-surgical corrective and cosmetic treatments
            </p>
            <div className="flex justify-between items-end">
              <p className="text-[48px] font-normal leading-[57.6px] mr-4">1</p>
              <Image
                src={serum}
                alt="serum"
                className="max-w-[288.59px] max-h-[234.11px] rounded-xl"
              />
            </div>
          </div>
          <div className="mx-4 md:mx-0 max-w-[669.2px] max-h-[482.21px] flex flex-col p-6 border-t-[1px] border-s-[1px] border-b-[1px] rounded-bl-[100px] border-[#434343] ">
            <p className="font-normal text-[30px] md:text-[48px] leading-[57.6px] mb-4">
              Option between In-Clinic and Virtual Consultation
            </p>
            <div className="flex justify-between items-end">
              <p className="text-[48px] font-normal leading-[57.6px] mr-4">2</p>
              <Image
                src={discuss}
                alt="discuss"
                className="max-w-[288.59px] max-h-[234.11px] rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
