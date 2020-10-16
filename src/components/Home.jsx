import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import { loadData } from "../utils/loadData";
import Blog from "./Blog";

const Home = (props) => {
  const [entrys, setEntrys] = useState([]);

  useEffect(() => {
    (async function () {
      const entry = await loadData(
        `http://localhost:3333/allPosts`
      );
      setEntrys(entry);
    })();
  }, [setEntrys]);

  return(
    <>
      <h1>Ryan's Blog</h1>
      {!!entrys.length ? (
        <Route exact path="/">
        {entrys.map((entry) => {
        return(
          <>
          <h2>
            {entry.title}
          </h2>
          <Link to={entry.slug}>See Post</Link>
          </>
        );
        })}
        </Route>
      ):(
        <p>
          No Blog Posts
        </p>
      )}
    </>
  )
};

export default Home;



