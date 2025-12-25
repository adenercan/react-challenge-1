function Start({ onStart }) {
    const subjects = [
        { name: "HTML", icon: "src/assets/imgs/html-icon.svg", bgColor: "bg-orange-100" },
        { name: "CSS", icon: "src/assets/imgs/css-icon.svg", bgColor: "bg-green-100" },
        { name: "JavaScript", icon: "src/assets/imgs/js-icon.svg", bgColor: "bg-blue-100" },
        { name: "Accessibility", icon: "src/assets/imgs/accessibility-icon.svg", bgColor: "bg-purple-100" },
    ];

    return (
        <div className="px-8 max-w-2xl mx-auto w-full">
            <h1 className="text-4xl font-light text-[#313E51] dark:text-white">Welcome to the</h1>
            <h1 className="text-4xl font-bold text-[#313E51] dark:text-white mb-4">Frontend Quiz!</h1>
            <p className="italic text-[#626C7F] dark:text-[#ABC1E1] mb-10">Pick a subject to get started</p>

            <div className="flex flex-col gap-4">
                {subjects.map((subject) => (
                    <button 
                        key={subject.name}
                        onClick={() => onStart(subject.name)}
                        className="flex items-center w-full p-4 bg-white dark:bg-[#3B4D66] rounded-2xl gap-4 shadow-sm hover:ring-2 hover:ring-purple-500 transition-all group"
                    >
                        <div className={`w-12 h-12 ${subject.bgColor} rounded-xl flex justify-center items-center p-2`}>
                            <img src={subject.icon} alt={subject.name} />
                        </div>
                        <span className="text-xl font-bold text-[#313E51] dark:text-white">{subject.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Start;