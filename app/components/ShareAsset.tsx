"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { messageData } from "../Context";
import { useContext } from "react";
// import Link from "next/link";
import { useState } from "react";
import { Modal, Button, Text, ActionIcon } from "rizzui";
import { XMarkIcon } from "@heroicons/react/20/solid";

// export default function App() {
//   return (
//     <>
//       <Button onClick={() => setModalState(true)}>Open Modal</Button>

//     </>
//   );
// }
const shareAsset = () => {
  const url = "http://localhost";
  const [modalState, setModalState] = useState(true);
  const { popup, setPopup } = useContext(messageData);
  return (
    // <div className="w-2/5 p-2 border border-drop-shadow-xl mt-2 rounded-sm relative md:left-80 left-32 top-10">
    //     <h1 className="text-xl p-2 text-slate-600">Share the asset<Link href="/" className="text-slate-600 p-1 relative lg:left-20 md:left-4 xl:left-64  ml:12 md:ml-40"><FontAwesomeIcon icon={faX} size="lg"/></Link></h1>
    //     <hr />
    //     <p className="p-2 mt-2">Copy Link Below</p>
    //     <div className="ml-2 flex bg-slate-200 rounded-sm"><div className="p-2 mt-2 border bg-slate-200 rounded-sm">{url}</div><span className="h-6 mt-4 relative xl:left-64 xl:ml-24 lg:left-52"><FontAwesomeIcon icon={faCopy} /></span></div>
    //     <p className="p-2 mt-4 mb-2">Social Media Share</p>
    //     <div className="ml-2 w-8 h-8 mb-2 rounded-full bg-slate-600 text-white font-bold"><p className="ml-3 pt-1 w-2 h-6">f</p></div>
    //     <hr />
    //     <button className="w-20 h-10 rounded-lg bg-red-500 text-white font-bold relative md:left-3/4 xl:ml-12 lg:ml-8">Close</button>
    // </div>
    <>
      <Modal
        isOpen={modalState}
        onClose={() => {
          setModalState(false);
          setPopup(0);
        }}
      >
        <div className="m-auto px-7 pt-6 pb-8 mb-64">
          <div className="mb-4 flex items-center justify-between">
            <Text as="p">Share the asset</Text>
            <ActionIcon
              size="sm"
              variant="text"
              onClick={() => {
                setModalState(false);
                setPopup(0);
              }}
            >
              <XMarkIcon className="h-auto w-6" strokeWidth={1.8} />
            </ActionIcon>
          </div>
          <hr className="mb-4" />
          <div className="grid grid-cols-2 gap-y-2 gap-x-5 [&_label>span]:font-medium">
            <Text as="p">Copy Link below</Text>
            <div className="flex bg-slate-200 col-span-2 rounded-md">
              <div className="p-2 border bg-slate-200 rounded-sm">{url}</div>
              <span className="h-6 mt-2.5 relative">
                <FontAwesomeIcon icon={faCopy} />
              </span>
            </div>
            <p className="pt-2 col-span-2">Social Media Share</p>
            <div className="w-8 h-8 rounded-full bg-slate-600 text-white font-bold">
              <p className="ml-3 pt-1 w-2 h-6">f</p>
            </div>
            <hr className="mt-2 col-span-2" />
            <div className="flex items-center justify-between col-span-2">
              <div className="sm:pl-80 sm:ml-20"></div>
              <Button
                type="submit"
                size="sm"
                className="w-24"
                onClick={() => {
                  setModalState(false);
                  setPopup(0);
                }}  
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default shareAsset;
