"use client";

import React, { Fragment, useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RiArrowDownSFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { Transition, Dialog, Listbox, Combobox } from "@headlessui/react";
import { BsCheck } from "react-icons/bs";
import { useAppSelector } from "@/redux/hooks";
import { buildQueryString } from "@/utils/buildFilterQueryString";
import { useAppDispatch } from "@/redux/hooks";
import { setFilterQuery } from "@/redux/slices/programSlices";
import { useSearchParams } from "next/navigation";

interface Campus {
  id: number;
  name: string;
}

const Campuses = () => {
  const dispatch = useAppDispatch();
  const campuses: Campus[] = [
    { id: 1, name: "On Campus" },
    { id: 2, name: "Off Campus" },
  ];

  const searchParams = useSearchParams();

  const campus = searchParams.get("campus_type");

  console.log(campus);

  const [selectedCampus, setSelectedCampus] = useState<Campus[]>(
    campus?.split(",")?.map((number) => {
      return campuses[Number(number) - 1];
    }) || []
  );

  const { filterQuery } = useAppSelector((state) => state.programs);

  function isSelected(value) {
    return selectedCampus.find((el) => el.id === value.id) ? true : false;
  }

  useEffect(() => {
    console.log("pop");
    selectedCampus.length > 0 &&
      dispatch(
        setFilterQuery({
          ...filterQuery,
          campus_type: selectedCampus.map((campus) => campus),
        })
      );
  }, []);

  function handleSelect(value) {
    if (!isSelected(value)) {
      const selectedCampusUpdated = [
        ...selectedCampus,
        campuses.find((el) => el.id === value.id),
      ];

      setSelectedCampus(selectedCampusUpdated);

      dispatch(
        setFilterQuery({
          ...filterQuery,
          campus_type: selectedCampusUpdated.map((campus) => campus),
        })
      );
    } else {
      handleDeselect(value);
    }
  }

  function handleDeselect(value) {
    const selectedCampusUpdated = selectedCampus.filter(
      (el) => el.id !== value.id
    );
    setSelectedCampus(selectedCampusUpdated);

    dispatch(
      setFilterQuery({
        ...filterQuery,
        campus_type: selectedCampusUpdated.map((campus) => campus),
      })
    );
  }
  return (
    <article>
      <h3 className="mt-2 leading-5 text-gray-600 mb-2">Campus</h3>

      <Listbox value={selectedCampus} onChange={(value) => handleSelect(value)}>
        {({ open }) => (
          <>
            <div className="relative w-full min-h-[42px]">
              <Listbox.Button
                type="button"
                className="relative flex justify-between items-center flex-wrap w-full min-h-[42px]  cursor-pointer focus-within:border-blue-400 active:border-blue-700   rounded-[14px] border border-gray-400 px-4 p-2
                           "
              >
                <span className="block  capitalize  text-gray-600 text-[13px]">
                  {selectedCampus.length < 1
                    ? "Select Campus Type"
                    : selectedCampus.map((person) => person.name).join(", ")}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <RiArrowDownSFill className="text-gray-400 text-[13px]" />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-0 ring-transparent focus:outline-none sm:text-sm z-10">
                  {campuses.map((Campus, index) => {
                    const selected = isSelected(Campus);
                    return (
                      <Listbox.Option
                        key={index}
                        className={({ active, selected }) =>
                          `relative cursor-pointer select-none rounded bg-white  px-4 py-[6px] hover:bg-gray-100  transition duration-300 ${
                            selected ? "bg-gray-200" : "bg-white"
                          }`
                        }
                        value={Campus}
                      >
                        <div className="flex items-center gap-3">
                          {selected && (
                            <span className="flex items-center pl-3 text-amber-600">
                              <TiTick className="h-5 w-5" aria-hidden="true" />
                            </span>
                          )}
                          <span
                            className={`block truncate capitalize text-[13px] ${
                              selected ? "font-medium" : "font-normal ml-[42px]"
                            }`}
                          >
                            {Campus.name}
                          </span>
                        </div>
                      </Listbox.Option>
                    );
                  })}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </article>
  );
};

export default Campuses;
