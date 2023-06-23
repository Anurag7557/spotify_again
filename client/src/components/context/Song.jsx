import { useState, useEffect } from "react";
import { useContext, createContext } from "react";
const songContext = createContext();


const SongProvider = ({children})=>{
    const [song , setSong] = useState({
            id:0,
            name:"",
            image:"",
            artist:"",
            genre:"",
            year:"",
            song_path:"",
            song_duration:""
    });
    return (
        <songContext.Provider value={[song,setSong]}>
            {children}
        </songContext.Provider>
    );
    
}
const useSong =()=>useContext(songContext)
export {useSong,SongProvider}
