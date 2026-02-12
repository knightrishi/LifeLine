import React from "react";
import { HeartPulse } from "lucide-react";
import { Syringe } from "lucide-react";
import { Droplets } from "lucide-react";
import { Calendar } from "lucide-react";

const ProfileCard = () => {
  return (
    <div
      className="
        w-[800px]
        bg-[#213b4e]/80
        backdrop-blur-2xl
        h-[250px]
        border border-white/20
        ml-16 mt-8 p-6
        rounded-2xl
        flex flex-col
        shadow-xl
      "
    >
      {/* Title */}
      <h4 className="font-medium text-white text-lg">
        Patient's Donation History
      </h4>

      <hr className="w-full border-t border-white/20 my-4" />

      {/* Stats Section */}
      <div className="flex justify-center items-center flex-1 gap-10">
       
       
        <div
          className="
            flex flex-col items-center justify-center
            text-white
            border border-white/20
            rounded-2xl
            h-28 w-32
            backdrop-blur-xl
            bg-white/5
          "
        >
          <HeartPulse size={28} className="mb-2" />
          <h4 className="text-xl font-semibold">51</h4>
          <p className="text-sm text-white/70">Lives Saved</p>
        </div>

       
       
        <div
          className="
            flex flex-col items-center justify-center
            text-white
            border border-white/20
            rounded-2xl
            h-28 w-32
            backdrop-blur-xl
            bg-white/5
          "
        >
          <Syringe  size={28} className="mb-2" />
          <h4 className="text-xl font-semibold">17</h4>
          <p className="text-sm text-white/70">Times donated</p>
        </div>
       
       
        <div
          className="
            flex flex-col items-center justify-center
            text-white
            border border-white/20
            rounded-2xl
            h-28 w-32
            backdrop-blur-xl
            bg-white/5
          "
        >
          <Droplets   size={28} className="mb-2" />
          <h4 className="text-xl font-semibold">7.5L</h4>
          <p className="text-sm text-white/70">Amount donated</p>
        </div>


        <div
          className="
            flex flex-col items-center justify-center
            text-white
            border border-white/20
            rounded-2xl
            h-28 w-32
            backdrop-blur-xl
            bg-white/5
          "
        >
          <Calendar   size={28} className="mb-2" />
          <h4 className="text-xl font-semibold">2021</h4>
          <p className="text-sm text-white/70">Donor Since</p>
        </div>




      </div>
    </div>
  );
};

export default ProfileCard;
