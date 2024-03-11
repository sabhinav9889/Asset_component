"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { messageData } from "../Context";
import { useContext } from "react";
import { useState } from "react";
import { Modal, Button, Text, ActionIcon } from "rizzui";
import { XMarkIcon } from "@heroicons/react/20/solid";

const shareAsset = () => {
  const url = "http://localhost";
  const [modalState, setModalState] = useState(true);
  const { popup, setPopup } = useContext(messageData);
  return (
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
