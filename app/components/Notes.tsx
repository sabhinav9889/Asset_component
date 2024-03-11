import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash, faPen} from "@fortawesome/free-solid-svg-icons";

const Notes = () =>{
    // variables
    const [lis, setLis] = useState<Notes[]>([]);
    const [cont, setCont] = useState("");
    const temp = {
        date: "",
        content: "",
    };
    const [fresh, setFresh] = useState<Notes>(temp);
    interface Notes{
        date: string;
        content: string;
    }
    //functions
    function del(item:Notes){
        // Create a new array without the element at the specified index
        const updatedList = lis.filter((_, index) => _ !== item);
        // Update the state with the new array
        setLis(updatedList);
    }
    function update(item:Notes){
        setFresh(item);
        setCont(item.content);
    }
    function getTodaysDateAndTime(): string {
        const currentDate = new Date();

        // Get the current date with leading zeros for single-digit days and months
        const day = ('0' + currentDate.getDate()).slice(-2);
        const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
        const year = currentDate.getFullYear();

        // Get the current time in 12-hour AM/PM format
        const time = currentDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

        // Combine date and time
        const dateTime = `${day} ${month} ${year}, ${time}`;

        return dateTime;
    }
    function updateItem(){
        const updContent = cont;
        const updDat = getTodaysDateAndTime();
        const updatedData = {
            date: updDat,
            content: updContent,
        }
        for(let i=0; i<lis.length; i++){
            if(lis[i]===fresh){
                lis[i] = updatedData;
                break;
            }
        }
        setFresh(temp);
        setCont("");
    }
    const handleNotes = () => {
        const content = cont;
        const dateAndTime = getTodaysDateAndTime();
        setLis((prev)=> [...prev, {"date" : dateAndTime, "content" : content}] );
        setCont(""); 
    }
    // relative sm:left-3/4 xl:ml-44 lg:ml-28 left-0 mb-2
    return(
        <div className="p-4 border-drop-shadow-xl border w-4/5 absolute xl:left-32 sm:left-32 left-12 mt-44 xl:mt-28" >
            <h1 className="p-4">Post a Note</h1>
            {(fresh.date==="")?
            <div>
                <textarea name="" id="notes" className="w-full h-40 p-4 border border-black" placeholder="Type something..." value={cont} onChange={(eve)=>setCont(eve.target.value)}></textarea>
                <div className="flex items-center justify-between col-span-2">
                    <div></div>
                    <button className="bg-red-400 text-white w-24 h-10 rounded-sm font-bold" onClick={handleNotes}>Save</button>
                </div>
            </div>
            :
            <div className="grid grid-cols-2 gap-y-2 gap-x-5 [&_label>span]:font-medium">
                <textarea name="" id="notesUpdate" className="w-full h-40 p-4 border col-span-2 border-black" placeholder="Type something..." value={cont} onChange={(eve)=> setCont(eve.target.value)}></textarea>
                <div className="flex items-center justify-between col-span-2">
                    <div></div>
                    <div className="flex">
                        <button className="bg-red-400 text-white w-24 h-10 rounded-sm font-bold mb-2" onClick={()=>setFresh(temp)}>Cancle</button>
                        <button className="bg-red-400 text-white w-24 h-10 rounded-sm font-bold ml-2 mb-2" onClick={()=>updateItem()}>Update</button> 
                    </div>
                </div>
            </div>}
            {lis.map((item, index)=>
                <div className="p-8 relative border-drop-shadow-xl border" key={index}>
                <div className="grid grid-cols-2 gap-y-2 gap-x-5 [&_label>span]:font-medium">
                    <div className="flex items-center justify-between col-span-2  text-slate-500">
                        <p className="p-2 pt-3 text-slate-500 flex">{item.date} </p>
                        <div className="w-12 relative left-96"></div>
                        <div className="flex">  
                            <div className="interactive-element pl-2 pt-1 w-12 h-8 pr-2 cursor-pointer" onClick={()=>del(item)}><FontAwesomeIcon icon={faTrash} size="lg"/></div>
                            <div className="interactive-element w-12 pt-1 pl-2 pr-2 cursor-pointer" onClick={()=>update(item)}><FontAwesomeIcon icon={faPen} className="" size="lg"/></div>
                        </div>
                    </div>
                </div>
                <p className="p-4">{item.content}</p>
             </div>
            )}
        </div>
    )
}


{/* <div className="relative xl:left-3/4 p-2 w-20 flex text-slate-500">
</div> */}
export default Notes;