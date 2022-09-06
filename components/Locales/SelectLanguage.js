// import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
// import { useEffect, useRef, useState } from "react";

import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const people = [
  { id: 1, name: "English - En", code: "en" },
  { id: 2, name: "Russia - Ru", code: "ru" },
  { id: 3, name: "Azerbaijan - Az", code: "az" },
];

const SelectLanguage = () => {
  const router = useRouter();
  const locale = people.find((el) => el.code == router.locale);
  const [lang, setLang] = useState(locale || people[0]);
  useEffect(() => {
    router.push(router.asPath, router.asPath, { locale: lang.code });
  }, [lang]);

  return (
    <Listbox value={lang} onChange={setLang}>
      <div className="relative mt-3">
        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="block truncate">{lang.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <Image
              src={"/vectors/downarrow.svg"}
              width={20}
              height={20}
              alt={"LanguageWorldIcon"}
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {people.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                  }`
                }
                value={person}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        lang ? "font-medium" : "font-normal"
                      }`}
                    >
                      {person.name}
                    </span>
                    {lang ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <Image
                          src={"/vectors/world.svg"}
                          width={20}
                          height={20}
                          alt={"LanguageWorldIcon"}
                        />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default SelectLanguage;
