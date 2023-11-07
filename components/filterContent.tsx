"use client";

import React, { Fragment, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Countries from "./inputsInFilter/countries";
import UniversityTypes from "./inputsInFilter/UniversityType";
import GradeTypes from "./inputsInFilter/GradeType";
import EducationTypes from "./inputsInFilter/Education";
import Campuses from "./inputsInFilter/Campus";
import Languages from "./inputsInFilter/Language";

interface Proptype {
  closeModal: () => void;
  screen: string;
}

const FilterContent = ({ closeModal, screen }: Proptype) => {
  return (
    <section
      className={`w-full ${screen !== "modal" && "hidden lg:block mt-[120px]"}`}
    >
      <div className="flex items-center h-[80px] md:bg-transparent bg-gray-200 w-full justify-between px-8">
        <h4 className="text-[24px] leading-[1.6] font-medium">Filter</h4>
        <IoCloseOutline onClick={closeModal} className="md:hidden" />
      </div>
      <div className="bg-white p-4 rounded-[12px] w-[278px] xl:w-[300px] lg:border lg:border-gray-400 border-0 border-transparent">
        <div className="mt-4 p-4 flex flex-col gap-3 w-full">
          <Countries />
          <UniversityTypes />
          <GradeTypes />
          <EducationTypes />
          <Campuses />
          <Languages />
          <button className="w-full h-[40px] mt-4 rounded-lg bg-[#0288D1] text-white flex justify-center items-center">
            CLEAR FILTERS
          </button>
        </div>
      </div>
    </section>
  );
};

export default FilterContent;
