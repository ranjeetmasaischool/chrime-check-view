'use client'
import Image from "next/image";
import Navbar from "@/components/Navbar";
import '../components/Page.css'
import { useState } from "react";
import API from "@/components/AxiosConfig";
import ShowData from "@/components/ShowData";
export default function Home() {
   const [search, setSearch] = useState("");
   const [results, setResults] = useState([]);
   const [isFetching, setIsFetching] = useState(false);
   const fatchData=()=>{

    if(search===""){
      alert("Please enter a search term!");
    }else{
      setIsFetching(true);
      API.get(`search?name=${search}`).then((res)=>{
        if(res.data.length==0){
          setResults("Data not Found with name "+search+" !!!");
        }else{

          setResults(res.data)
        }
      }).catch((err)=>{
        alert(err.message)
      }).finally((ele)=>{
        setIsFetching(false)
      })
    }
   }
  return (
    <div className="homemain">
      <section className="search">
        <div className="searchdiv">
          <input
            type="text"
            className="searchinput"
            placeholder="Search Name"
            value={search}
            onChange={(ev)=>{
              setSearch(ev.target.value);
            }}
            onKeyPress={(key)=>{
              if(key.key=="Enter"){
                fatchData();
              }
            }}
          />
          <button disabled={isFetching} onClick={fatchData} className="searchbutton">{!isFetching? "Search":"Loading..."}</button>
        </div>
      </section>
      <section className="showresult">
        <ShowData results={results}/>
      </section>
    </div>
  );
}
