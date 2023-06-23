import React, { useState, useEffect } from "react";
import "./genre.css";
import { useNavigate, useParams } from "react-router-dom";
import Cardmusic from "./cardmusic";
import Layout from "../../layout/Layout";
function Genre() {
  const [arr, setArr] = useState([]);
  const [page, setPage] = useState(1);
  const [col,setcol]=useState("")
  const [newarr, setNewArr] = useState([]);
  const pageArr = [];
  const params = useParams();
  const name = params.name;
  let i = 1;
  while (i <= Math.ceil(arr.length / 10)) {
    pageArr.push(i);
    i++;
  }
  
  const getData = async () => {
    await fetch(`http://localhost:5501/data`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        const arr1 = data.filter((el) => el.genre.includes(name.toLowerCase()));
        setArr(arr1);
        const end = page * 10;
        const start = (page - 1) * 10;
        const new_arr = arr1.slice(start, end);
        setNewArr(new_arr);
        if(name==="Romantic"){
          setcol("rgb(235, 73, 181),rgb(235, 73, 181,0.8)")
        }
        else if(name==="kpop"){
          setcol("rgb(122, 0, 245),rgb(122, 0, 245,0.1)")
        }
        else if(name=="Devotional"){
          setcol("rgb(245, 102, 0),rgb(245, 102, 0,0.1)")
        }else if(name==="Travel"){
          setcol("rgb(33, 181, 62),rgb(33, 181, 62,0.1)")
        }else{
          setcol("rgb(122, 51, 15),rgb(122, 51, 15,0.1)")
        }
      });
  };
  const handlePage = (el) => {
    setPage(el);
  };
  useEffect(() => {
    getData();
  }, [page]);

  console.log(newarr);
  return (
    <Layout>
    <div style={{background:`linear-gradient(${col})`,height:"80rem"}} className="genre-songs">
      <div className="namegenre" >{name}</div>
      <div className="genrebox">
        <div className="genre">
        {newarr.map((el) => {
          return (
            <Cardmusic name={el.name} artist={el.artist} image={el.image} />
          );
        })}
      </div>
      <div id="page">
          {pageArr.map((e) => {
            return (
              <button id="btn" onClick={() => handlePage(e)}>
                {e}
              </button>
            );
          })}
        </div></div>
    </div>
    </Layout>
  );
}
export default Genre;
