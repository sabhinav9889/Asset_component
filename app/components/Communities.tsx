interface Communities{
    comm:number
} 

const Communities: React.FC<Communities> = ({comm}) => {
    const members = 0, discussion = 0, lastActivity = "N/A";
    const heading = "Testing";
    return(
        <div className="p-8 absolute xl:left-32 sm:left-32 left-12 mt-44 xl:mt-28">
          <h1 className="text-xl font-bold">Communities({comm})</h1>
          <div className="sm:w-96 w-48 mt-2 border-drop-shadow-xl border rounded-lg">
            <h1 className="p-3 font-bold text-xl">{heading}</h1>
            <div className="sm:flex p-4">
                <p>{members} Members </p><p className="pl-1">- {discussion} Discussions </p><p className="pl-1">- Last Activity {lastActivity}</p>  
            </div>
          </div> 
        </div>
    )
}

export default Communities;