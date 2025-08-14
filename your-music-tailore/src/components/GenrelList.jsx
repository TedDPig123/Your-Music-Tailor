export default function GenreList(props){
    const list = props.list;

    return(
        <div className="flex flex-wrap w-full border-solid border-1 border-white min-h-15 mt-5">
            {list.map(genre=>
                (<div key={genre} className="m-2 text-[16px] p-2 bg-[#9b00a9] flex gap-2">
                    <div>{genre}</div>
                    <div onClick={()=>props.toggleHandler(genre)} className="text-[20px] cursor-pointer">×</div>
                </div>)
            )}
        </div>
    )

}