export default function EmotionsList(props){
    const list = props.list;

    return(
        <div className="flex flex-wrap w-full border-solid min-h-15">
            {list.map(emotion=>
                (<div key={emotion} className="m-2 text-[16px] p-2 bg-gradient-to-r from-purple-500/80 to-pink-500/80 rounded-full flex gap-2">
                    <div className="select-none p-1">{emotion}</div>
                    <div onClick={()=>props.toggleHandler(emotion)} className="text-[20px] cursor-pointer">×</div>
                </div>)
            )}
        </div>
    )

}