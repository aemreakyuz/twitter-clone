import { useContext } from "react";
import React from "react";
import { SiteContext } from "../contexts/SiteContext";

function Search() {
  const { texts } = useContext(SiteContext);

  return <div>{texts.searchPage.search_text}</div>;
}

export default Search;
