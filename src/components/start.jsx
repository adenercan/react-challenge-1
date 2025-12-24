
function Start({ onStart }){


    return (
        <div className="bg-[#F4F6FA]">
            <div>
                {/* theme toggle gelecek */}
            </div>

            {/* başlık */}
            <div className="px-8 pt-6">
                <h1 className="text-3xl font-normal ">Welcome to the</h1>
                <h1 className="text-3xl font-bold">Frontend Quiz!</h1>
                <p className="italic text-[#626C7F] ">Pick a subject to get started</p>
            </div>

            {/* buttonlar */}
            <div className="flex justify-center items-center flex-col p-6 gap-3" >
                <button className="flex  items-center w-80 p-3 bg-white rounded-xl gap-4" onClick={() => onStart("HTML")}>
                    <div className="w-10 h-10 bg-orange-100 rounded-md flex justify-center items-center flex-row p-1 ">
                        <img className="" src="src/assets/imgs/html-icon.svg" alt="" />
                    </div>HTML</button>
                <button className="flex items-center w-80 p-3 bg-white rounded-xl gap-4" onClick={() => onStart("CSS")}>
                    <div className="w-10 h-10 bg-green-100 rounded-md flex justify-center items-center flex-row p-1">
                        <img src="src/assets/imgs/css-icon.svg" alt="" />
                    </div>CSS</button>
                <button className="flex items-center w-80 p-3 bg-white rounded-xl gap-4" onClick={() => onStart("JavaScript")}>
                    <div className="w-10 h-10 bg-blue-100 rounded-md flex justify-center items-center flex-row p-1">
                        <img src="src/assets/imgs/js-icon.svg" alt="" />
                    </div>JavaScript</button>
                <button className="flex items-center w-80 p-3 bg-white rounded-xl gap-4" onClick={() => onStart("Accessibility")}>
                    <div className="w-10 h-10 bg-purple-100 rounded-md flex justify-center items-center flex-row p-1">
                        <img src="src/assets/imgs/accessibility-icon.svg" alt="" />
                    </div>Accessibility</button>
            </div>
        </div>
    )
}

export default Start