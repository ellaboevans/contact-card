import {
  EnvelopeClosedIcon,
  MobileIcon,
  GlobeIcon,
  SewingPinFilledIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { ActiveTab, ContactCardProps } from "../interface";

export default function ContactCard({
  name,
  phone,
  email,
  website,
  location,
  imageSrc,
  company,
  company_website,
  company_location,
  position,
}: ContactCardProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>("Contact");
  return (
    <div className="w-full md:max-w-xs bg-yellow-100 text-neutral-500 rounded-lg md:shadow overflow-hidden pt-8">
      <div className="p-6 text-center ">
        <img
          src={imageSrc}
          alt={name}
          className="w-16 h-16 object-cover rounded-full mx-auto mb-3"
        />
        <h2 className="text-2xl text-neutral-700 font-semibold">{name}</h2>
        <button className="mt-5 border border-neutral-400 px-4 py-1.5 neutral-600 transition-all duration-200 hover:border-neutral-600 rounded ">
          + Add to contacts
        </button>
      </div>
      <div className="px-4 py-2 bg-white">
        <div className="flex justify-around border-b mb-5">
          <button
            className={`py-2 px-4 text-sm font-semibold ${
              activeTab === "Contact"
                ? "text-yellow-500 border-b-2 border-yellow-400"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("Contact")}
          >
            Contact
          </button>
          <button
            className={`py-2 px-4 text-sm font-semibold ${
              activeTab === "Company"
                ? "text-yellow-500 border-b-2 border-yellow-400"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("Company")}
          >
            Company
          </button>
          <button
            className={`py-2 px-4 text-sm font-semibold ${
              activeTab === "Socials"
                ? "text-yellow-500 border-b-2 border-yellow-400"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("Socials")}
          >
            Socials
          </button>
        </div>
        {/*Contact Tab Content*/}
        <div className="">
          {activeTab === "Contact" && (
            <>
              <div className="flex gap-2 items-start ">
                <MobileIcon className="mt-1" />
                <div className="flex flex-col mb-3">
                  <p className=" text-gray-500 mr-2">Phone number</p>
                  <a href={`tel:${phone}`} className="text-blue-600 text-sm ">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-2 items-start ">
                <EnvelopeClosedIcon className="mt-1" />
                <div className="flex flex-col mb-3">
                  <p className="text-gray-500">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-blue-600 text-sm "
                  >
                    {email}
                  </a>
                </div>
              </div>
              <div className="flex gap-2 items-start ">
                <GlobeIcon className="mt-1" />
                <div className="flex flex-col mb-3">
                  <span className="material-icons text-gray-500 mr-2">
                    Personal website
                  </span>
                  <a
                    href={website}
                    target="_blank"
                    className="text-blue-600 text-sm "
                  >
                    {website}
                  </a>
                </div>
              </div>
              <div className="flex gap-2 items-start ">
                <SewingPinFilledIcon className="mt-1 text-xl" />
                <div className="flex flex-col">
                  <span className="material-icons text-gray-500 mr-2">
                    Location
                  </span>
                  <p className="text-blue-600 text-sm">{location}</p>
                </div>
              </div>
            </>
          )}
        </div>
        {/*Company Tab Content*/}
        <div className="pb-4">
          {activeTab === "Company" && (
            <>
              <div className="flex gap-2 items-start ">
                <MobileIcon className="mt-1" />
                <div className="flex flex-col mb-3">
                  <p className=" text-gray-500 mr-2">Company name</p>
                  <span className="text-blue-600 text-sm">{company}</span>
                </div>
              </div>

              <div className="flex gap-2 items-start ">
                <EnvelopeClosedIcon className="mt-1" />
                <div className="flex flex-col mb-3">
                  <p className="text-gray-500">Position/ Rank</p>
                  <span className="text-blue-600 text-sm">{position}</span>
                </div>
              </div>
              <div className="flex gap-2 items-start ">
                <GlobeIcon className="mt-1" />
                <div className="flex flex-col mb-3">
                  <span className="material-icons text-gray-500 mr-2">
                    Company website
                  </span>
                  <a
                    href={company_website}
                    target="_blank"
                    className="text-blue-600 text-sm "
                  >
                    {company_website}
                  </a>
                </div>
              </div>
              <div className="flex gap-2 items-start ">
                <SewingPinFilledIcon className="mt-1 text-xl" />
                <div className="flex flex-col">
                  <span className="material-icons text-gray-500 mr-2">
                    Company Location
                  </span>
                  <p className="text-blue-600 text-sm">{company_location}</p>
                </div>
              </div>
            </>
          )}
        </div>

        {/*Socials Tab Content*/}
        <div className="">
          {activeTab === "Socials" && (
            <>
              <div className="flex gap-2 items-start ">
                <MobileIcon className="mt-1" />
                <div className="flex flex-col mb-3">
                  <p className="  mr-2 text-red-500">Social Media Info Here</p>
                  <a href={`tel:${phone}`} className="text-blue-600 text-sm ">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-2 items-start ">
                <EnvelopeClosedIcon className="mt-1" />
                <div className="flex flex-col mb-3">
                  <p className="text-gray-500">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-blue-600 text-sm "
                  >
                    {email}
                  </a>
                </div>
              </div>
              <div className="flex gap-2 items-start ">
                <GlobeIcon className="mt-1" />
                <div className="flex flex-col mb-3">
                  <span className="material-icons text-gray-500 mr-2">
                    Personal website
                  </span>
                  <a
                    href={website}
                    target="_blank"
                    className="text-blue-600 text-sm "
                  >
                    {website}
                  </a>
                </div>
              </div>
              <div className="flex gap-2 items-start ">
                <SewingPinFilledIcon className="mt-1 text-xl" />
                <div className="flex flex-col">
                  <span className="material-icons text-gray-500 mr-2">
                    Location
                  </span>
                  <p className="text-blue-600 text-sm">{location}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
