import { useState } from "react";
import GenreList from "./GenrelList";
import EmotionsList from "./EmotionsList";

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

const emotions = [
  "joy",
  "anger",
  "sadness",
  "fear",
  "love",
  "excitement",
  "anxiety",
  "contentment",
  "frustration",
  "gratitude"
];

export default function Main(){
    const [userGenreList, setUserGenreList] = useState([]);
    const [emotionsList,setEmotionsList] = useState(emotions);

    function hideMenu(){
        const menu = document.querySelector(".dropdown-content");
        const button = document.querySelector(".genre-button");

        button.classList.remove("border-black");
        button.classList.add("border-white");

        menu.classList.add("hidden");
    }

    function showMenu(){
        const menu = document.querySelector(".dropdown-content");
        const button = document.querySelector(".genre-button");

        button.classList.remove("border-white");
        button.classList.add("border-black");

        menu.classList.remove("hidden");
    }

    function hideEmotions(){
        const menu = document.querySelector(".emotions-content");
        const button = document.querySelector(".emotions-button");

        button.classList.remove("border-black");
        button.classList.add("border-white");

        menu.classList.add("hidden");
    }

    function showEmotions(){
        const menu = document.querySelector(".emotions-content");
        const button = document.querySelector(".emotions-button");

        button.classList.remove("border-white");
        button.classList.add("border-black");

        menu.classList.remove("hidden");
    }

    function toggleMusicTag(id){
        const genre = document.getElementById(id);

        if(id === "Surprise Me!"){
            setUserGenreList(userGenreList.includes("Surprise Me!") ? [] : ["Surprise Me!"]);
            return;
        }

        if(genre.classList.contains("hidden")){
            genre.classList.remove("hidden");
            setUserGenreList(userGenreList.filter(e=>e!==id));
        }else{
            genre.classList.add("hidden");
            setUserGenreList([...userGenreList, id].filter(e=>e !=="Surprise Me!"));
        }
    }

    function toggleEmotionsTag(id){
        const genre = document.getElementById(id);

        if(genre.classList.contains("hidden")){
            genre.classList.remove("hidden");
            setEmotionsList(emotionsList.filter(e=>e!==id));
        }else{
            genre.classList.add("hidden");
            setEmotionsList([...emotionsList, id]);
        }
    }

    return(
    <div>         
        <div id="genre-dropdown" className="relative flex flex-col w-fill bg-white text-black items-start text-[20px] cursor-pointer">             
            <h1 className="genre-button w-full text-start p-2 border-2 border-white" onClick={showMenu}>Select Genre(s)</h1>             
            <div className="dropdown-content hidden absolute top-full left-0 w-full bg-white border border-gray-300 shadow-lg z-50">                 
                {musicGenres.map(genre =>                 
                    (<div key={genre} id={genre} className="hover:bg-gray-500 w-full text-start p-2" onClick={()=>{toggleMusicTag(genre);hideMenu()}}>{genre}</div>)                 
                )}             
            </div>         
        </div>          
        <GenreList list={userGenreList} toggleHandler={toggleMusicTag}/>
        <EmotionsList list={emotions} toggleHandler={toggleEmotionsTag}/>
    </div>)
}