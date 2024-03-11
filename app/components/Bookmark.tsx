import { useState } from "react";
import { Modal, Button, Text, ActionIcon, Input, Textarea } from "rizzui";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { messageData } from "../Context";
import { useContext } from "react";

const BookMark = () => {
  //   let items: string[] = ["a", "b", "c"];
  const [items, setItems] = useState<string[]>([]);
  const [cat, setCat] = useState(0);
  const [addC, setAddC] = useState("");
  const [modalState, setModalState] = useState(true);
  const [modalState2, setModalState2] = useState(true);
  const { popup, setPopup } = useContext(messageData);
  function handleSave() {
    setItems([...items, addC]);
    setAddC("");
    setCat(0);
  }
  return (
    // <div className="z-10 bg-white">
    // </div>
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
        // <div className="p-4 md:w-1/4 w-64 border-slate-300 bg-white border absolute rounded-sm md:left-112 top-32">
        //     <p className="md:text-xl text-sm">Add New Bookmark Category</p>
        //     <p className="pt-4 w-3/4 text-sm">Title</p>
        //     <input type="text" id="d2" name="d3" value={addC} onChange={(e)=>setAddC(e.target.value)} className="mt-2 border border-slate-300 rounded-sm p-2 w-4/5 h-8" placeholder="Enter Categorey Title" required></input>
        //     <br />
        //     <button className="bg-red-500 text-white md:w-16 text-sm md:h-7 rounded-sm border mt-4" onClick={()=>handleSave()}>Save</button>
        //     <button className="bg-red-500 text-white ml-2 md:w-16 text-sm md:h-7 rounded-sm border mt-4" onClick={(cat)=>{setCat(0)}}>Close</button>
        // </div>:
        // <div className="p-4 lg:pl-44 sm:pl-32 pl-8  w-1/2 border-slate-300 border bg-white absolute rounded-sm lg:left-96 md:left-64 sm:left-44 left-28">
        //     <p className="text-xl w-3/4">Add New Bookmark</p>
        //     <p className="pt-4 w-3/4">Title *</p>
        //     <input type="text" id="d1" name="dr" value={addD} onChange={(e)=>setAddD(e.target.value)} className="mt-4 border border-slate-300 rounded-sm p-2 w-3/4 h-8" placeholder="Bookmark Title" required></input>
        //     <p className="w-3/4 mt-4">Category</p>
        //     <select required className="w-3/4 h-8 border-slate-400 border mt-4">
        //         {items.map((item, index) => (
        //             <option key={index} value={item}>{item}</option>
        //         ))}
        //     </select>
        //     <p className="w-3/4 text-slate-700 font-bold text-sm mt-4 cursor-pointer" onClick={()=>setCat(1)}>Add New Category</p>
        //     <p className="w-3/4 mt-4">Link *</p>
        //     <div className="h-8 rounded-sm border w-3/4 bg-slate-300 mt-4">

        //     </div>
        //     <p className="w-3/4 mt-4">Description</p>
        //     <textarea name="" id="" placeholder="Type something" className="p-2 w-3/4 mb-2 mt-4 border border-slate-300 rounded-sm"></textarea>
        //     <div>
        //         <button className="bg-red-400 text-white sm:w-20 h-8 mt-4">Save</button>
        //         <button className="bg-red-400 text-white ml-2 sm:w-20 h-8 mt-4">Close</button>
        //     </div>
        // </div>
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
