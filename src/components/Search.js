import React, {useState} from "react";

function Search({gregsSearch}) {
  const [filterForm] = useState("")
  
  function filter(e) {
		gregsFilter(e.target.value)
	}
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e)
    return{[e.target.description]: e.target.value}
    
  }
    let gregsFilter = gregsSearch.filter(el => { 
      return(el.name.toLowerCase().includes(filterForm.toLowerCase()))
    })

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={""}
       
      />
      <button onClick={filter} type="submit">🔍</button>
    </form>
  );
}

export default Search;
 