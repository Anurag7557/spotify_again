import { useState, useEffect } from "react";
import Player from "./Player";
import { useSong } from "../../context/Song";
import { usePlayLists } from "../../context/PlayLists";


function Music_Player() {
  const [song , setSong] = useSong();
  const [PlayLists , setPlayLists]=usePlayLists();
  // const [] = usePlayLists();
  // const [currentSongIndex, setCurrentSongIndex] = useState(0);
  // const [nextSongIndex, setNextSongIndex] = useState(0);
  useEffect(() => {
    // setNextSongIndex(() => {
    //   if (currentSongIndex + 1 > PlayLists.length - 1) {
    //     return 0;
    //   } else {
    //     return currentSongIndex + 1;
    //   }
    // });
    console.log(PlayLists)
  }, []);
  // currentSongIndex, PlayLists.length
  return (
    <>
    </>
      // <Player
      //   currentSongIndex={currentSongIndex}
      //   setCurrentSongIndex={setCurrentSongIndex}
      //   nextSongIndex={nextSongIndex}
      //   PlayLists={PlayLists}
      // />
  

  );
}

export default Music_Player;
