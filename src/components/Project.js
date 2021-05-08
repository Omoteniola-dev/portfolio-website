import React from "react";

const Project = ({id, image, desc, tags}) => {
    return (
         <div className="m-10 p-10 ma-5 mb-4 w-4/5 h-auto shadow-lg lg:hover:bg-blue-300 
         hover:shadow-md lg:w-1/3 h-auto mb-4 ml-8 bg-gray-100 justify-center lg:shadow-xl rounded-xl">
             <div className="flex justify-end flex-row-reverse ">
                {
                    tags.map((tag) => {
                        return <span className="p-1 px-2 bg-gray-300 font-bold mx-2 rounded-xl">{tag}</span>
                    })
                }
             </div>
            <img style={{width: '200px', height: '200px'}} alt="Project" src={image}/>
            <p className="font-light text-base">{desc}</p>        
        </div>       
            )
}
        

export default Project;