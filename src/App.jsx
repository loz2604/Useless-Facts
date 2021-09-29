
// Fetching data from an API

import React, { useEffect, useState } from "react"
import './App.css';
import paper from "./images/paper.jpg"

const App = () => {
  // const useEffect = (() => {
  //   document.title = "Did You Know?"
  // }, [])
  const [data, setData] = useState({})

  useEffect(() => {
    handleFetch()
  }, [])

  useEffect(() => {
    document.title = "Did You Know?"
  }, [])

  const handleFetch = async () => {
    let response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    let data = await response.json()
    setData(data)
  }
  return (
    <div className="wrapper">
      <h1>Did You Know...?</h1>
      <button id="button" onClick={handleFetch}>Give Me A Fact</button>
      <div id="text"
        class="bg_image"
        style={{
          backgroundImage: 'url(' + paper + ')',
        }}
      >
        <p>{data.text}</p>
      </div>

    </div>
  );
}

export default App;
