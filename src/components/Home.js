import React, { useEffect, useState } from 'react'
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';

const Home = () => {
    const [apidata, setApidata] = useState([]);
    const [dummyarr, setDummyArr] = useState([]);
    const [filterVal, setFilteredVal] = useState("");
    const [searchquery, setSearchquery] = useState("");
    const [toggle, setToggle] = useState(false);
    const navi = useNavigate();
  
    useEffect(() => {
      getdata();
    }, []);
  
    const getdata = async () => {
      const data = await fetch("https://coralmango.com/api/react-test");
      const json = await data.json();
  
      setApidata(json);
      setDummyArr(json);
    };
  
    // handling the changing value of select tag and filtering the data on the basis of that
  
    const handleChange = (e) => {
      setFilteredVal(e.target.value);
      e.target.value === "age" ? sortByAge() : sortByName();
      
      toast.info("You are vewing the filtered results!", {
        position: toast.POSITION.TOP_RIGHT
      });
    };
  
    const sortByName = () => {
      const sortedArr = apidata.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
  
        // names must be equal
        return 0;
      });
      setApidata(sortedArr);
    };
    const sortByAge = () => {
      const sortedArr = apidata.sort((a, b) => a.age - b.age);
      setApidata(sortedArr);
    };
  
    const handleSearch = (e) => {
      setSearchquery(e.target.value);
      if (e.target.value === "") {
        setApidata(dummyarr);
      }
      const filterArr = dummyarr.filter((ele) => {
        return (
          ele.name.toLowerCase().includes(searchquery.toLowerCase()) ||
          ele.occupation.toLowerCase().includes(searchquery.toLowerCase())
        );
      });
      setApidata(filterArr);
    };

    function handleLogout(){
     navi('/')
    }
  
    return (
      <div className="App">
        {
          //search bar
        }
  
        <header className='header'>
          <div className='search'>
            <input
              type="text"
              placeholder="Search"
              className='searchbar'
              value={searchquery}
              onChange={handleSearch}
            />
          </div>
  
          {
            //select box
          }
  
          <select className='select' onChange={handleChange} value={filterVal}>
            <option value="name">Filter by Name</option>
            <option value="age">Filter by Age</option>
          </select>
  
          <button className='bttn' onClick={() => setToggle(!toggle)}>
            {toggle ? "Cards" : "Table"}
          </button>
          <button className='bttn' onClick={handleLogout}>Logout</button>
        </header>
  
        {
          // table created
        }
  
        {toggle ? (
          <div className='table_container'>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Occupation</th>
                </tr>
              </thead>
              <tbody>
                {apidata.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td>{e.name}</td>
                      <td>{e.age}</td>
                      <td>{e.occupation}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="card_container">
            {apidata.map((ele, i) => (
              <Card
                key={i}
                name={ele.name}
                age={ele.age}
                occupation={ele.occupation}
              />
            ))}
          </div>
        )}
      </div>
  )
}

export default Home
