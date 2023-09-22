import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
const App = () => {
  const [posts, setPosts] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3003/api/v2/tickers").then((response) => {
      setPosts(response.data);
    });
  }, []);

  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`div ${isDarkMode ? "dark-mode" : ""}`}>
      <h1>HODLINFO</h1>
      <button className="circle-button" onClick={toggleDarkMode}></button>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last</th>
            <th>Buy</th>
            <th>Sell</th>
            <th>Volume</th>
            <th>Base_Unit</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.name}</td>
              <td>{post.last}</td>
              <td>{post.buy}</td>
              <td>{post.sell}</td>
              <td>{post.volume}</td>
              <td>{post.base_unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
        <hr />
      <div class="footer">
          <div class="footer-text">Copyright © 2023</div>
          <div class="footer-text1">HodlInfo.com</div>
          <div class="footer-text pointer">
            <a href="mailto:support@hodlinfo.com" class="footer-text-link">
              Support
            </a>
          </div>
      </div>
    </div>
  );
};

export default App;
