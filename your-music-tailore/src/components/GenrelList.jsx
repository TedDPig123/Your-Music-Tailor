export default function GenreList(props){
    const list = props.list;

    return(
        <div>
            {list.map(genre=>
                (<div key={genre} onClick={()=>props.toggleHandler(genre)}>{genre}</div>)
            )}
        </div>
    )

}