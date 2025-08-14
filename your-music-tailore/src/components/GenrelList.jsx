export default function GenreList(props){
    const list = props.list;

    return(
        <div className="flex flex-wrap w-full border-solid min-h-15">
            {list.map(genre=>
                (<div key={genre} className="m-2 text-[16px] p-2 bg-gradient-to-l from-pink-500/80 to-cyan-500/80 flex gap-2 rounded-full">
                    <div className="select-none p-1">{genre}</div>
                    <div onClick={()=>props.toggleHandler(genre)} className="text-[20px] cursor-pointer">×</div>
                </div>)
            )}
        </div>
    )

}