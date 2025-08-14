import { useState } from "react";
import GenreList from "./GenrelList";

export default function EmotionsList(props){
    const list = props.list;

    return(
        <div className="flex flex-wrap w-full border-solid border-1 border-white min-h-15 mt-5">
            {list.map(emotion=>
                (<div key={emotion} className="m-2 text-[16px] p-2 bg-[#9b00a9] flex gap-2">
                    <div>{emotion}</div>
                    <div onClick={()=>props.toggleHandler(emotion)} className="text-[20px] cursor-pointer">×</div>
                </div>)
            )}
        </div>
    )

}