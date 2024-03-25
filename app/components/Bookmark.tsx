import { useState } from "react";
import { Modal, Button, Text, ActionIcon, Input, Textarea } from "rizzui";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { messageData } from "../Context";
import { useContext } from "react";

const BookMark = ({popup, setPopup}) => {
  const [items, setItems] = useState<string[]>([]);
  const [cat, setCat] = useState(0);
  const [addC, setAddC] = useState("");
  const [modalState, setModalState] = useState(true);
  const [modalState2, setModalState2] = useState(true);
  function handleSave() {
    setItems([...items, addC]);
    setAddC("");
    setCat(0);
  }
  return (
    <div className="inset-0 flex items-center justify-center">
      {cat ? (
        <Modal isOpen={modalState2} onClose={() => setCat(0)} size="sm">
          <div className="m-auto px-7 pt-6 pb-8 mb-64">
            <div className="mb-4 flex items-center justify-between">
              <Text as="p">Add New Bookmark Category</Text>
              <ActionIcon size="sm" variant="text" onClick={() => setCat(0)}>
                <XMarkIcon className="h-auto w-6" strokeWidth={1.8} />
              </ActionIcon>
            </div>
            <hr className="mb-3" />
            <div className="grid grid-cols-2 gap-y-2 gap-x-5 [&_label>span]:font-medium">
              <Text as="p" className="col-span-2">Title *</Text>
              <input type="text" placeholder="Title" className="input input-bordered w-full col-span-2" value={addC} onChange={(e) => setAddC(e.target.value)}/>
              <div className="flex">
                <Button
                  type="submit"
                  size="sm"
                  className="w-20"
                  onClick={() => handleSave()}
                >
                  Save
                </Button>
                <Button
                  type="submit"
                  size="sm"
                  className="ml-2 w-20"
                  onClick={() => setCat(0)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      ) : (
        <Modal
          isOpen={modalState}
          onClose={() => {
            setModalState(false);
            setPopup(0);
          }}
          size="xl"
        >
          <div className="m-auto px-7 pt-6 pb-8">
            <div className="mb-7 flex items-center justify-between">
              <Text as="p">Add New Bookmark</Text>
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
            <hr className="mb-3" />
            <div className="grid grid-cols-2 gap-y-2 gap-x-5 [&_label>span]:font-medium">
              {/* <Input
                label="Title *"
                inputClassName="border-2"
                size="lg"
                className="col-span-2"
              /> */}
              <Text as="p" className="col-span-2">Title *</Text>
              <input type="text" placeholder="Title" className="input input-bordered w-full col-span-2" />
              <Text as="p" className="col-span-2">Category</Text>
              <div className="w-full col-span-2">
                <select
                  required
                  className="w-full h-10 rounded-md border-slate-400 border col-span-2"
                >
                  {items.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center justify-between col-span-2">
                <div className="w-12 relative left-96"></div>
                <Button
                  type="submit"
                  size="sm"
                  className="w-32"
                  onClick={() => setCat(1)}
                >
                  Add Category
                </Button>
              </div>
              <Text as="p">Link *</Text>
              <div className="h-10 rounded-md border w-full bg-slate-300 col-span-2"></div>
              <div></div>
              <Textarea
                label="Description"
                placeholder="Write you message..."
                className="col-span-2"
              />
                <div className="flex items-center justify-between col-span-2">
                  <div className="w-12 relative left-96"></div>
                  <div className="flex">
                    <Button
                      type="submit"
                      size="sm"
                      className="w-20"
                      onClick={() => {
                        setModalState(false);
                        setPopup(0);
                      }}
                    >
                      Save
                    </Button>
                    <Button
                      type="submit"
                      size="sm"
                      className="ml-2 w-20"
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
            </div>
        </Modal>
      )}
    </div>
  );
};

export default BookMark;
