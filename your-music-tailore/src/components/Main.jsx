import { useState } from "react";
import GenreList from "./GenrelList";

const musicGenres = [
 "Surprise Me!",
 "Pop",
 "Rock",
 "Hip-Hop/Rap",
 "Country",
 "R&B/Soul",
 "Electronic/EDM",
 "Jazz",
 "Blues",
 "Folk",
 "Classical",
 "Reggae",
 "Punk",
 "Metal",
 "Indie",
 "Alternative",
 "Funk",
 "Gospel",
 "Latin",
 "Reggaeton",
 "K-Pop"
];

export default function Main(){
    const [userGenreList, setUserGenreList] = useState([]);

    function toggleMusicTag(id){
        const genre = document.getElementById(id);

        if(id === "Surprise Me!"){
            if(genre.style.display === "none"){
                genre.style.display = "inline";
            }else{
                genre.style.display = "none";
            }
            setUserGenreList(userGenreList.includes("Surprise Me!") ? [] : ["Surprise Me!"]);
            return;
        }

        if(genre.style.display === "none"){
            genre.style.display = "inline";
            setUserGenreList(userGenreList.filter(e=>e!==id));
        }else{
            genre.style.display = "none";
            setUserGenreList([...userGenreList, id].filter(e=>e !=="Surprise Me!"));
        }
    }

    return(
    <div>
        <div className="">Choose Genre(s)</div>

        <div id="genre-dropdown" className="flex flex-col w-fit bg-white text-black items-start text-[20px] select-none">
            {musicGenres.map(genre =>
                (<div key={genre} id={genre} className="hover:bg-gray-500 w-full text-start" onClick={()=>toggleMusicTag(genre)}>{genre}</div>)
            )}
        </div>

        <GenreList list={userGenreList} toggleHandler={toggleMusicTag}/>
    </div>)
}