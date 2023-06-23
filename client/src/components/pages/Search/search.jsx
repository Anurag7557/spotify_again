import { useEffect, useState } from "react";
import {BsSearch} from 'react-icons/bs';
import {BiTimeFive} from 'react-icons/bi';
import "./search.css";
import Card from "./card"
import Cardgenre from "./cardgenre";
import {IoIosArrowBack} from 'react-icons/io';
import Layout from "../../layout/Layout";
function Search() {
    const [arr, setArr] = useState([]);
    const [wholearr, setWholeArr] = useState([]);
    const [string, setString] = useState("");
    const [genre,setgenre] = useState([])
    console.log(wholearr);
    const getData = async () => {
      await fetch(`http://localhost:5501/data`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setWholeArr(data);
        });
    };
    const getgenre = async () =>{
        await fetch(`http://localhost:5501/genre`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setgenre(data);
        });
    };
    const handleChange = (e) => {
      setString(e.target.value);
      console.log(e.target.value);
    };
    const handleSearch = () => {
        if(string===""){
            setArr([])
        }
        else{
            const arr = wholearr.filter((data) => data.name.toLowerCase().includes(string) === true);
            setArr(arr);
        }
    };
    useEffect(()=>{
        getData()
    },[])
    useEffect(()=>{
        getgenre()
    },[])
    useEffect(() => {
      handleSearch();
    }, [string]);
    
    return (
     <Layout>
       
        <div className="show">
            <div id="search">
                <IoIosArrowBack id="backicon"/>
                <BsSearch id="icon"/>
                <input
                    className="search"
                    type="text"
                    placeholder="What do you want to listen to?"
                    id="search"
                    value={string}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div >
                {arr.length > 0 ? (
                    <div>
                        <div id="searchbar">
                            <div id="song">Song</div>
                            <div id="album">Album</div>
                            <BiTimeFive id="time"/>
                        </div>
                    <div className="showsearch">
                        {arr.map((el) => {
                            return (
                                <Card name={el.name} image={el.image} artist={el.artist}/>
                            );
                        })}
                    </div>
                    </div>
                ) : string.length === 0 ? (
                    <div>
                        <div className="browse">Browse All</div>
                    <div className="showgenre">
                        {genre.map((el) => {
                            return (
                                <Cardgenre image={el.image} name={el.name} color={el.color} />
                            );
                        })}
                    </div>
                    </div>
    
                ) : (
                    <h1>No data found</h1>
                )}

            </div>
        </div>
        </Layout>
    );
}

export default Search;
    
