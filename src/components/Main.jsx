import { useState } from "react";
import GenreList from "./GenrelList";
import EmotionsList from "./EmotionsList";
import Header from "./Header";
import { getSongFromClaude } from "../ai-integration";
import SongRec from "./SongRec";

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
  "K-Pop",
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
  "gratitude",
];

export default function Main() {
  const [userGenreList, setUserGenreList] = useState(["Surprise Me!"]);
  const [emotionsList, setEmotionsList] = useState([]);
  const [similarArtistInput, setSimilarArtistInput] = useState("");
  const [similarArtist, setSimilarArtist] = useState("");
  const [customEmotion, setCustomEmotion] = useState("");
  const [songRec, setSongRec] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function hideMenu() {
    const menu = document.querySelector(".dropdown-content");
    menu.classList.add("hidden");
  }

  function showMenu() {
    const menu = document.querySelector(".dropdown-content");
    menu.classList.remove("hidden");
  }

  function hideEmotions() {
    const menu = document.querySelector(".emotions-content");
    menu.classList.add("hidden");
  }

  function showEmotions() {
    const menu = document.querySelector(".emotions-content");
    menu.classList.remove("hidden");
  }

  function toggleMusicTag(id) {
    const genre = document.getElementById(id);

    if (id === "Surprise Me!") {
      setUserGenreList(
        userGenreList.includes("Surprise Me!") ? [] : ["Surprise Me!"]
      );
      return;
    }

    if (genre.classList.contains("hidden")) {
      genre.classList.remove("hidden");
      setUserGenreList(userGenreList.filter((e) => e !== id));
    } else {
      genre.classList.add("hidden");
      setUserGenreList(
        [...userGenreList, id].filter((e) => e !== "Surprise Me!")
      );
    }
  }

  function toggleEmotionsTag(id) {
    if (!emotions.includes(id)) {
      setEmotionsList(emotionsList.filter((e) => e !== id));
      return;
    }

    const genre = document.getElementById(id);

    if (genre.classList.contains("hidden")) {
      genre.classList.remove("hidden");
      setEmotionsList(emotionsList.filter((e) => e !== id));
    } else {
      genre.classList.add("hidden");
      setEmotionsList([...emotionsList, id]);
    }
  }

  function addCustomEmotion(id) {
    setEmotionsList([...emotionsList, id]);
  }

  async function getSong() {
    setIsLoading(true);
    try {
      const songMarkdown = await getSongFromClaude(
        userGenreList,
        emotionsList,
        similarArtist
      );
      setSongRec(songMarkdown);
    } catch (error) {
      console.error("Error getting song recommendation:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Header />
        <div className="flex flex-col items-center justify-center pt-4">
          <div className="w-[60vw] relative">
            <div className="relative flex flex-col space-y-4">
              <div className="w-full backdrop-blur-sm bg-black/30 rounded-2xl border border-cyan-400/50 shadow-2xl shadow-cyan-500/20 relative z-20">
                <div
                  id="genre-dropdown"
                  className="relative flex flex-col w-full text-white items-start text-[12px] cursor-pointer"
                >
                  <h1
                    className="w-full flex justify-between focus:outline-1 genre-button w-full text-start p-4 bg-gradient-to-r from-pink-500/80 to-cyan-500/80 backdrop-blur-md rounded-t-2xl font-bold text-[14px] hover:from-[#6e00c3] hover:to-green-500 transition duration-300"
                    onClick={() => {
                      showMenu();
                      hideEmotions();
                    }}
                  >
                    <div>🎵 SELECT GENRE(S)</div>
                    <div>˅</div>
                  </h1>
                  <div className="max-h-64 overflow-y-auto dropdown-content hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-2 border-cyan-400/50 shadow-2xl shadow-cyan-500/30 z-50 rounded-b-2xl overflow-hidden">
                    {musicGenres.map((genre) => (
                      <div
                        key={genre}
                        id={genre}
                        className="hover:bg-gradient-to-r hover:from-pink-500/50 hover:to-cyan-500/50 w-full text-start p-2 transition-all duration-300 border-b border-cyan-400/20 last:border-b-0 font-medium hover:text-cyan-300 hover:shadow-inner text-sm sm:text-base"
                        onClick={() => {
                          toggleMusicTag(genre);
                          hideMenu();
                        }}
                      >
                        {genre}
                      </div>
                    ))}
                  </div>
                </div>
                <GenreList
                  list={userGenreList}
                  toggleHandler={toggleMusicTag}
                />
              </div>

              <div className="w-full backdrop-blur-sm bg-black/30 rounded-2xl border border-purple-400/50 shadow-2xl shadow-purple-500/20 relative z-10">
                <div
                  id="emotions-dropdown"
                  className="relative flex flex-col w-full text-white items-start text-[20px] cursor-pointer"
                >
                  <h1
                    className="w-full flex justify-between focus:outline-1 emotions-button w-full text-start p-4 bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-md rounded-t-2xl font-bold text-[14px] hover:from-[#6e00c3] hover:to-green-500 transition duration-300"
                    onClick={() => {
                      showEmotions();
                      hideMenu();
                    }}
                  >
                    <div>💭 HOW ARE YOU FEELING TODAY? </div>

                    <div>˅</div>
                  </h1>
                  <div className="max-h-64 overflow-y-auto emotions-content hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-2 border-purple-400/50 shadow-2xl shadow-purple-500/30 z-50 rounded-b-2xl overflow-hidden ">
                    {emotions.map((emotion) => (
                      <div
                        key={emotion}
                        id={emotion}
                        className="hover:bg-gradient-to-r hover:from-purple-500/50 hover:to-pink-500/50 w-full text-start p-2 transition-all duration-300 border-b border-purple-400/20 last:border-b-0 font-medium hover:text-purple-300 hover:shadow-inner capitalize text-sm sm:text-base"
                        onClick={() => {
                          toggleEmotionsTag(emotion);
                          hideEmotions();
                        }}
                      >
                        {emotion}
                      </div>
                    ))}
                  </div>
                </div>
                <EmotionsList
                  list={emotionsList}
                  toggleHandler={toggleEmotionsTag}
                />
                <div className="p-3">
                  <div className="flex flex-col w-full justify-end">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={customEmotion}
                        onChange={(e) => setCustomEmotion(e.target.value)}
                        placeholder="Enter a custom emotion..."
                        className="text-[14px] w-full bg-black/50 border border-yellow-400/30 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                      />
                      <button
                        onClick={() => {
                          addCustomEmotion(customEmotion);
                        }}
                        className="bg-gradient-to-r text-[14px]  from-purple-500/80 to-pink-500/80 hover:bg-gradient-to-t cursor-pointer text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:-translate-y-[5px]"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full backdrop-blur-sm bg-black/30 rounded-2xl border border-green-400/50 shadow-2xl shadow-green-500/20 relative z-0">
                <div className="p-4 bg-gradient-to-r from-green-500/80 to-teal-500/80 backdrop-blur-md rounded-t-2xl">
                  <h2 className="font-bold text-[14px] text-white">
                    🎤 SIMILAR ARTIST
                  </h2>
                </div>

                <div className="flex flex-wrap text-[18px] w-full justify-center border-solid">
                  {similarArtist.length > 0 && (
                    <div className="mt-3 text-[18px] py-4 px-5 from-green-500/80 to-teal-500/80 bg-gradient-to-r flex gap-2 rounded-full">
                      <div>{similarArtist}</div>
                      <div
                        onClick={() => setSimilarArtist("")}
                        className="text-[20px] cursor-pointer"
                      >
                        ×
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-3 flex w-full gap-2 justify-between">
                  <input
                    type="text"
                    value={similarArtistInput}
                    onChange={(e) => setSimilarArtistInput(e.target.value)}
                    placeholder="Enter an artist you'd like recommendations similar to..."
                    className="w-full bg-black/50 border border-green-400/30 text-[14px] rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none"
                  />
                  <button
                    onClick={() => setSimilarArtist(similarArtistInput)}
                    className="bg-gradient-to-r from-green-500/80 to-teal-500/80 hover:bg-gradient-to-t cursor-pointer text-white text-[14px] px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:-translate-y-[5px]"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <button
                onClick={getSong}
                disabled={isLoading}
                className="bg-gradient-to-r from-yellow-500/90 to-orange-500/90 hover:from-yellow-400 hover:to-orange-400 text-white text-[16px] font-bold px-8 py-4 rounded-xl shadow-2xl shadow-yellow-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-yellow-500/50 border border-yellow-400/50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Getting Your Recommendation...
                  </>
                ) : (
                  "Get Your Song Recommendation!"
                )}
              </button>
            </div>
          </div>
         {songRec && <SongRec song={songRec} />}
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
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      
  );
}