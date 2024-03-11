import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  Modal,
  Button,
  Text,
  ActionIcon,
  Input,
  Password,
  Checkbox,
} from "rizzui";
import { XMarkIcon } from "@heroicons/react/20/solid";

interface Itr {
  iterations: number;
}
const Iteration: React.FC<Itr> = ({ iterations }) => {
  const version = "Version 2.0",
    fileType = "HTML",
    duration = "1 min",
    publishedDate = "January 23 2024",
    uploadedBy = "PJM Admin",
    author = "Akhil",
    additionalInfo = "This is the latest version";
  const [modalState, setModalState] = useState(false);
  return (
    <>
      {modalState && (
        <Modal isOpen={modalState} onClose={() => setModalState(false)}>
          <div className="m-auto px-7 pt-6 pb-8 mb-24 h-auto">
            <div className="mb-4 flex items-center justify-between">
              <Text as="p" className="text-xl">
                Intent of This Asset
              </Text>
              <ActionIcon
                size="sm"
                variant="text"
                onClick={() => setModalState(false)}
              >
                <XMarkIcon className="h-auto w-6" strokeWidth={1.8} />
              </ActionIcon>
            </div>
            <hr />
            <div className="grid grd-cols-2  gap-x-5 [&_label>span]:font-medium">
              <Text as="p" className="col-span-2 mt-2">
                {fileType}
              </Text>
              <Text as="p" className="col-span-2 mt-2 font-bold">
                Published
              </Text>
              <Text as="p" className="col-span-2 mt-2">
                {publishedDate}
              </Text>
              <Text as="p" className="col-span-2 mt-2 font-bold">
                Uploaded By
              </Text>
              <Text as="p" className="col-span-2 mt-2">
                {uploadedBy}
              </Text>
              <Text as="p" className="col-span-2 mt-2 font-bold">
                Author
              </Text>
              <Text as="p" className="col-span-2 mt-2">
                {author}
              </Text>
              <Text as="p" className="col-span-2 mt-2 font-bold">
                Additional Info
              </Text>
              <Text as="p" className="col-span-2 mt-2">
                {additionalInfo}
              </Text>
           </div>
              <hr className="col-span-2 mb-2 mt-2" />
              <div className="flex items-center justify-between">
                <div className="sm:pl-80 ml-10"></div>
                <Button
                  type="submit"
                  size="sm"
                  className="w-24"
                  onClick={() => setModalState(false)}
                >
                  Close
                </Button>
              </div>
            </div>
        </Modal>
      )}
      <div className="p-8 w-4/5 absolute xl:left-32 sm:left-32 left-12 mt-44 xl:mt-28">
        <h1 className="text-xl font-bold">Related Asset({iterations})</h1>
        <div className="lg:w-96 w-64 mt-2 border-drop-shadow-xl border rounded-lg">
          <h1 className="p-4 font-bold text-xl">Options1</h1>
          <div className="flex p-2 pl-4">
            <div
              className="w-6 h-6 pl-2 pt-0.5 rounded-full border-2 border-solid border-red-500 text-red-500 flex cursor-pointer"
              onClick={() => setModalState(true)}
            >
              <FontAwesomeIcon icon={faInfo} size="sm" />
            </div>
            <p className="pl-3 text-slate-400">PJM Admin</p>
          </div>
          <div className="p-4">
            <p>{version}</p>
            <p className="mt-2">
              {fileType} - {duration}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Iteration;
