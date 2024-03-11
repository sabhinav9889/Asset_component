"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip, Button } from "rizzui";
import Intent from "./Intent";
import Asset from "./RelatedAsset";
import Comm from "./Communities";
import Share from "./ShareAsset";
import BookMark from "./Bookmark";
import Notes from "./Notes";
import Iteration from "./Iterations";
import { messageData } from "../Context";
import { useContext } from "react";
import {
  faInfo,
  faCopy,
  faNoteSticky,
  faUserGroup,
  faUsers,
  faLightbulb,
  faBookmark,
  faShareNodes,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const assetCount = 0;
  const iterations = 0;
  const notes = 0;
  const relCommunities = 0;
  const [turn, setTurn] = useState(0);
  const { popup, setPopup } = useContext(messageData);
  return (
    <div className="">
      <div className="lg:flex sm:pl-4 p-4 w-4/5 absolute sm:left-32 left-12 pl-1 h-44 xl:h-24">
        <div className="flex h-16">
          <div className="flex sm:p-4 pt-6 p-2">
            {!(turn === 0) ? (
              <Tooltip content={"Intent of This Asset"}>
                <div
                  className="sm:w-8 sm:h-8 w-6 h-4 pb-6 pl-2 sm:pl-3 sm:pt-1/2 rounded-full border-2 border-solid bg-red-500 text-white cursor-pointer"
                  onClick={() => setTurn(0)}
                >
                  <FontAwesomeIcon icon={faInfo} size="sm" />
                </div>
              </Tooltip>
            ) : (
              <Tooltip content={"Intent of This Asset"}>
                <div className="sm:w-8 sm:h-8 w-6 h-4 pb-6 pl-2 sm:pl-3 sm:pt-1/2 rounded-full border-2 border-solid bg-white text-bg-red-500 ">
                  <FontAwesomeIcon icon={faInfo} size="sm" />
                </div>
              </Tooltip>
            )}
          </div>
          <div className="flex sm:p-4 pt-6">
            {turn === 1 ? (
              <Tooltip content={"Iterations"}>
                <div className="sm:w-8 sm:h-8 sm:pt-1 sm:pl-2.5 w-6 h-4 pb-6 pl-1.5 rounded-full border-2 border-solid bg-white text-red-500">
                  <FontAwesomeIcon icon={faCopy} size="sm" />
                </div>
              </Tooltip>
            ) : (
              <Tooltip content={"Iterations"}>
                <div
                  className="sm:w-8 sm:h-8 sm:pt-1 sm:pl-2.5 w-6 h-4 pb-6 pl-1.5 cursor-pointer  rounded-full bg-red-500 text-white"
                  onClick={() => setTurn(1)}
                >
                  <FontAwesomeIcon icon={faCopy} size="sm" />
                </div>
              </Tooltip>
            )}
            <p className="sm-pl-1 ml-1/2 sm:ml-2 sm:text-lg text-sm text-red-500">
              ({iterations})
            </p>
          </div>
          <div className="flex sm:p-4 pt-6">
            {turn === 2 ? (
              <Tooltip content={"Related Assets"}>
                <div className="sm:w-8 sm:h-8 sm:pl-2.5 sm:pt-1 w-6 h-4 pb-6 pl-1.5 rounded-full border-2 border-solid bg-white text-red-500">
                  <FontAwesomeIcon icon={faNoteSticky} size="sm" />
                </div>
              </Tooltip>
            ) : (
              <Tooltip content={"Related Assets"}>
                <div
                  className="sm:w-8 sm:h-8 sm:pl-2.5 sm:pt-1 w-6 h-4 pb-6 pl-1.5 cursor-pointer rounded-full bg-red-500 text-white"
                  onClick={() => setTurn(2)}
                >
                  <FontAwesomeIcon icon={faNoteSticky} size="sm" />
                </div>
              </Tooltip>
            )}
            <p className="text-sm ml-1/2 sm:ml-2 sm:text-lg text-red-500">
              ({assetCount})
            </p>
          </div>
          <div className="flex sm:p-4 pt-6">
            {turn === 3 ? (
              <Tooltip content={"Related Communities"}>
                <div className="w-6 h-4 pb-6 pl-1 sm:w-8 sm:h-8 sm:pl-2 sm:pt-1 rounded-full border-2 border-solid bg-white text-red-500">
                  <FontAwesomeIcon icon={faUserGroup} size="sm" />
                </div>
              </Tooltip>
            ) : (
              <Tooltip content={"Related Communities"}>
                <div
                  className="w-6 h-4 pb-6 pl-1 sm:w-8 sm:h-8 sm:pl-2 sm:pt-1 cursor-pointer rounded-full bg-red-500 text-white"
                  role="button"
                  onClick={() => setTurn(3)}
                >
                  <FontAwesomeIcon icon={faUserGroup} size="sm" />
                </div>
              </Tooltip>
            )}
            <p className="text-sm sm:text-lg ml-1/2 sm:ml-2 text-red-500">
              ({relCommunities})
            </p>
          </div>
          <div className="flex sm:p-4 pt-6">
            {turn === 4 ? (
              <Tooltip content={"Notes"}>
                <div className="w-6 h-4 pb-6 pl-1.5 sm:w-8 sm:h-8 sm:pl-2 sm:pt-1 rounded-full border-2 border-solid bg-white text-red-500">
                  <FontAwesomeIcon icon={faPenToSquare} size="sm" />
                </div>
              </Tooltip>
            ) : (
              <Tooltip content={"Notes"}>
                <div
                  role="button" className="interactive-element w-6 h-4 pb-6 pl-1.5 sm:w-8 sm:h-8 sm:pl-2.5 sm:pt-1 cursor-pointer rounded-full bg-red-500 text-white"
                  onClick={() => setTurn(4)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} size="sm" />
                </div>
              </Tooltip>
            )}
            <p className="text-sm sm:text-lg ml-1/2 sm:ml-2 text-red-500">({notes})</p>
          </div>
          <div className="flex sm:p-4 pt-6">
            {/* {(turn===5)?<div className="w-6 h-6 pl-1 sm:w-8 sm:h-8 sm:pl-2 sm:pt-1 rounded-full border-2 border-solid bg-white text-red-500">
              <FontAwesomeIcon icon={faUsers} size="sm" />
            </div>: */}
            <div className="w-6 h-6 pl-1 sm:w-8 sm:h-8 sm:pl-2 sm:pt-1 rounded-full bg-slate-300 text-white">
              {/* <Tooltip content={"I'm your tooltip"}> */}
              <FontAwesomeIcon icon={faUsers} size="sm" />
              {/* </Tooltip> */}
            </div>
            {/* } */}
          </div>
        </div>
        <div className="flex absolute lg:left-3/4">
          <div className="flex p-4 pt-2.5">
            <div className="w-10 h-10 p-2 text-red-500 cursor-pointer">
              <Tooltip content={"Inspired"}>
                <FontAwesomeIcon icon={faLightbulb} size="lg" />
              </Tooltip>
            </div>
          </div>
          <div className="flex p-4 pt-2.5">
              <div
                className="w-10 h-10 p-2 text-red-500 cursor-pointer"
                onClick={() => setPopup(1)}
              >
                <Tooltip content={"Add Bookmark"}>
                  <FontAwesomeIcon icon={faBookmark} size="lg" />
                </Tooltip>
              </div>
          </div>
          <div className="flex p-4 pt-3.5">
              <Tooltip content={"Share the asset"}>
                <div
                  className="w-7 h-7 pl-1.5 sm:w-8 sm:h-8 sm:pl-2 sm:pt-1 pt-1 cursor-pointer rounded-full text-white bg-red-500"
                  onClick={() => setPopup(2)}
                >
                  <FontAwesomeIcon icon={faShareNodes} size="sm" />
                </div>
              </Tooltip>
          </div>
        </div>
      </div>
      <hr className="border-t-1 border-red-500 w-4/5 absolute sm:left-32 left-12 mb-2 lg:mt-24 mt-40" />
      {turn === 0 && <Intent />}
      {turn === 2 && <Asset assetCount={assetCount} />}
      {turn === 3 && <Comm comm={relCommunities} />}
      {popup === 1 && <BookMark />}
      {popup === 2 && <Share />}
      {turn === 4 && <Notes />}
      {turn === 1 && <Iteration iterations={iterations} />}
    </div>
  );
};

export default NavBar;