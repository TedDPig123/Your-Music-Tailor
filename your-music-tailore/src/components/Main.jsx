import { useState } from "react";
import GenreList from "./GenrelList";
import EmotionsList from "./EmotionsList"

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
    const [emotionsList,setEmotionsList] = useState([]);

    function hideMenu(){
        const menu = document.querySelector(".dropdown-content");
        menu.classList.add("hidden");
    }

    function showMenu(){
        const menu = document.querySelector(".dropdown-content");
        menu.classList.remove("hidden");
    }

    function hideEmotions(){
        const menu = document.querySelector(".emotions-content");
        menu.classList.add("hidden");
    }

    function showEmotions(){
        const menu = document.querySelector(".emotions-content");
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
    <div className="min-h-screen">
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-[60vw] relative">
                <div className="relative flex flex-col items-center">
                    <div className="w-full backdrop-blur-sm bg-black/30 rounded-2xl border border-cyan-400/50 shadow-2xl shadow-cyan-500/20 mb-6 relative z-20">
                        <div id="genre-dropdown" className="relative flex flex-col w-full text-white items-start text-[20px] cursor-pointer">             
                            <h1 className="genre-button w-full text-start p-4 bg-gradient-to-r from-pink-500/80 to-cyan-500/80 backdrop-blur-md rounded-t-2xl font-bold text-[18px] hover:from-[#6e00c3] hover:to-green-500 transition duration-300" 
                                onClick={()=>{showMenu();hideEmotions()}}>
                                🎵 SELECT GENRE(S) 
                            </h1>             
                            <div className="max-h-64 overflow-y-auto dropdown-content hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-2 border-cyan-400/50 shadow-2xl shadow-cyan-500/30 z-50 rounded-b-2xl overflow-hidden">                 
                                {musicGenres.map(genre =>                 
                                    (<div key={genre} 
                                          id={genre} 
                                          className="hover:bg-gradient-to-r hover:from-pink-500/50 hover:to-cyan-500/50 w-full text-start p-2 transition-all duration-300 border-b border-cyan-400/20 last:border-b-0 font-medium hover:text-cyan-300 hover:shadow-inner text-sm sm:text-base" 
                                          onClick={()=>{toggleMusicTag(genre);hideMenu()}}>
                                        {genre}
                                    </div>)                 
                                )}             
                            </div>         
                        </div>
                        <GenreList list={userGenreList} toggleHandler={toggleMusicTag}/>
                    </div>

                    <div className="w-full top-10 backdrop-blur-sm bg-black/30 rounded-2xl border border-purple-400/50 shadow-2xl shadow-purple-500/20 -mt-12 relative z-10">
                        <div id="emotions-dropdown" className="relative flex flex-col w-full text-white items-start text-[20px] cursor-pointer">             
                            <h1 className="emotions-button w-full text-start p-4 bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-md rounded-t-2xl font-bold text-[18px] hover:from-[#6e00c3] hover:to-green-500 transition duration-300" 
                                onClick={()=>{showEmotions();hideMenu()}}>
                                💭 HOW ARE YOU FEELING TODAY?
                            </h1>             
                            <div className="max-h-64 overflow-y-auto emotions-content hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-2 border-purple-400/50 shadow-2xl shadow-purple-500/30 z-50 rounded-b-2xl overflow-hidden ">                 
                                {emotions.map(emotion =>                 
                                    (<div key={emotion} 
                                          id={emotion} 
                                          className="hover:bg-gradient-to-r hover:from-purple-500/50 hover:to-pink-500/50 w-full text-start p-2 transition-all duration-300 border-b border-purple-400/20 last:border-b-0 font-medium hover:text-purple-300 hover:shadow-inner capitalize text-sm sm:text-base" 
                                          onClick={()=>{toggleEmotionsTag(emotion);hideEmotions()}}>
                                        {emotion}
                                    </div>)                 
                                )}             
                            </div>         
                        </div> 
                        <EmotionsList list={emotionsList} toggleHandler={toggleEmotionsTag}/>
                    </div>
                </div>
            </div>
        </div>

        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div 
            className="fixed inset-0 opacity-5 pointer-events-none"
            style={{
                backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
            }}
        ></div>
    </div>)
}