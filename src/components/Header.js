import React, {useState} from "react";
import Search from "./Search";

function Header({gregSearch}) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search gregsSearch={gregSearch}/>
    </header>
  );
}

export default Header;
