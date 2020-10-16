import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import { loadData } from "../utils/loadData";
import Post from "./Post";

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
        <div>
        <Route exact path="/">
        {entrys.map((entry) => {
        return(
          <div key={entry.id}>
          <h2>
            {entry.title}
          </h2>
          <Link to={`/post/${entry.slug}`}>See Post</Link>
          </div>
        );
        })}
        </Route>
        <Route path ={`/post/:slug`}>
          <Link to='/'>Return home</Link>
          <Post posts={entrys}/>
        </Route>

        </div>

      ):(
        <p>
          No Blog Posts
        </p>
      )}
    </>
  )
};

export default Home;



