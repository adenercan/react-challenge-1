
function Start({ onStart }){
    const subjects = [
        { 
            name: "HTML", 
            icon: "src/assets/imgs/html-icon.svg",
            bgColor: "bg-orange-100" 
        },
        { 
            name: "CSS", 
            icon: "src/assets/imgs/css-icon.svg", 
            bgColor: "bg-green-100" 
        },
        { 
            name: "JavaScript", 
            icon: "src/assets/imgs/js-icon.svg", 
            bgColor: "bg-blue-100" 
        },
        { 
            name: "Accessibility", 
            icon: "src/assets/imgs/accessibility-icon.svg", 
            bgColor: "bg-purple-100" 
        },
    ];

    return (
        <div className="bg-[#F4F6FA]">
            <div>
                {/* theme toggle gelecek */}
            </div>

            <div className="px-8 pt-6">
                <h1 className="text-3xl font-normal ">Welcome to the</h1>
                <h1 className="text-3xl font-bold">Frontend Quiz!</h1>
                <p className="italic text-[#626C7F] ">Pick a subject to get started</p>
            </div>

            <div className="flex justify-center items-center flex-col p-6 gap-3" >
                {subjects.map((subject, index) => (
                    <button key={index} className="flex items-center w-80 p-3 bg-white rounded-xl gap-4" onClick={() => onStart(subject.name)}>
                        <div className={`w-10 h-10 ${subject.bgColor} rounded-md flex justify-center items-center flex-row p-1`}>
                            <img className="" src={subject.icon} alt="" />
                        </div>{subject.name}
                    </button>   
                ))}                
            </div>
        </div>
    )
}

export default Start