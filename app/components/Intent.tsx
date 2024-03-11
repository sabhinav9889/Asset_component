import React from "react";

const Intent = () => {
    const theIntent  = "This is the intent";
    const cat = ["new to the job", "mid management","active listening", "writing", "time management", "operations monitoring", "complex problem solving","active listening", "writing", "time management", "operations monitoring", "complex problem solving"];
    const knowledge = ["active listening", "writing", "time management", "operations monitoring", "complex problem solving","active listening", "writing", "time management", "operations monitoring", "complex problem solving","active listening", "writing", "time management", "operations monitoring", "complex problem solving","active listening", "writing", "time management", "operations monitoring", "complex problem solving"];
    return(
        <div className="sm:p-8 border-drop-shadow-xl border w-4/5 absolute sm:left-32 left-12 mt-44 xl:mt-28">
          <h1 className="text-xl font-bold">Intent of this Asset</h1>
          <p className="mt-3">{theIntent}</p>
          <div className="sm:flex mt-3 pt-2">
            <div className="">
                <h1 className="font-bold text-slate-400">CATEGORY</h1>
                <p className="pt-2">{cat}</p>
            </div>
            <div className="ml-2 sm:ml-20">
                <h1 className="font-bold text-slate-400">KNOWLEDGE TAGS</h1>
                <p className="pt-2">{knowledge}</p>
            </div>
          </div>
        </div>
    )
}

export default Intent;