"use client";

import React, { Fragment, useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RiArrowDownSFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { Transition, Dialog, Listbox } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useSearchParams } from "next/navigation";
import { setFilterQuery } from "@/redux/slices/programSlices";

interface Language {
  id: number;
  name: string;
}

const Languages = () => {
  const Languages: Language[] = [
    { id: 1, name: "Turkish" },
    { id: 2, name: "Chinese" },
    { id: 3, name: "German" },
    { id: 4, name: "French" },
    { id: 5, name: "Spanish" },
    { id: 6, name: "Russian" },
    { id: 7, name: "Arabic" },
    { id: 8, name: "30% English %70 Turkish" },
    { id: 9, name: "50% English %50 Turkish" },
    { id: 10, name: "30% Arabic %70 Turkish" },
  ];

  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const { filterQuery } = useAppSelector((state) => state.programs);

  const language = searchParams.get("education_language");

  const [selectedLanguage, setSelectedLanguage] = useState<Language[]>(
    language?.split(",")?.map((number) => {
      return Languages[Number(number) - 1];
    }) || []
  );

  useEffect(() => {
    selectedLanguage.length > 0 &&
      dispatch(
        setFilterQuery({
          ...filterQuery,
          education_language: selectedLanguage.map((language) => language),
        })
      );
  }, []);

  function isSelected(value) {
    return selectedLanguage.find((el) => el.id === value.id) ? true : false;
  }

  function handleSelect(value) {
    if (!isSelected(value)) {
      const selectedLanguageUpdated = [
        ...selectedLanguage,
        Languages.find((el) => el.id === value.id),
      ];

      setSelectedLanguage(selectedLanguageUpdated);

      dispatch(
        setFilterQuery({
          ...filterQuery,
          education_language: selectedLanguage.map((language) => language),
        })
      );
    } else {
      handleDeselect(value);
    }
  }

  function handleDeselect(value) {
    const selectedLanguageUpdated = selectedLanguage.filter(
      (el) => el.id !== value.id
    );
    setSelectedLanguage(selectedLanguageUpdated);

    dispatch(
      setFilterQuery({
        ...filterQuery,
        education_language: selectedLanguage.map((language) => language),
      })
    );
  }
  return (
    <article>
      <h3 className="mt-2 leading-5 text-gray-600 mb-2">Education Language</h3>
      <Listbox
        value={selectedLanguage}
        onChange={(value) => handleSelect(value)}
      >
        {({ open }) => (
          <>
            <div className="relative w-full min-h-[42px]">
              <Listbox.Button
                type="button"
                className="relative flex justify-between items-center flex-wrap w-full min-h-[42px]  cursor-pointer focus-within:border-blue-400 active:border-blue-700   rounded-[14px] border border-gray-400 px-4 p-2
                           "
              >
                <span className="block  capitalize  text-gray-600 text-[13px]">
                  {selectedLanguage.length < 1
                    ? "Select Language Type"
                    : selectedLanguage.map((person) => person.name).join(", ")}
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
                  {Languages.map((Language, index) => {
                    const selected = isSelected(Language);
                    return (
                      <Listbox.Option
                        key={index}
                        className={({ active, selected }) =>
                          `relative cursor-pointer select-none rounded bg-white  px-4 py-[6px] hover:bg-gray-100  transition duration-300 ${
                            selected ? "bg-gray-200" : "bg-white"
                          }`
                        }
                        value={Language}
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
                            {Language.name}
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

export default Languages;
