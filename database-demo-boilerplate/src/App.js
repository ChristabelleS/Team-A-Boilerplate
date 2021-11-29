import "./App.css";
import React, { useState } from "react";
import { app } from "../src/firebaseConfig";

function App() {
  const [onceRead, setonceRead] = useState(null);
  const [listenerRead, setListenerRead] = useState(null);
  const [allData, setAllData] = useState(null);

  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900"
        rel="stylesheet"
      />
      <header className="App-header">
        <p
          style={{ fontFamily: "Inter", fontWeight: "bold", fontSize: "50px" }}
        >
          Firebase Demo
        </p>
      </header>
      <div id="button-div">
        <div class="crud-container">
          <h2>
            <span class="crud-emphasised-letter">C</span>reate
          </h2>
          <button className="demo-button">Add document software testing</button>
          <button className="demo-button">
            Add document Mobile Development
          </button>
        </div>
        <div class="crud-container">
          <h2>
            <span class="crud-emphasised-letter">R</span>ead
          </h2>
          <button className="demo-button">
            Read Software Testing document
          </button>
          <button className="demo-button">
            Read Software Testing document with listener
          </button>
          <button className="demo-button">Read collection with listener</button>
        </div>
        <div class="crud-container">
          <h2>
            <span class="crud-emphasised-letter">U</span>pdate
          </h2>
          <button className="demo-button">
            Update document software testing with available yes
          </button>
          <button className="demo-button">
            Update nested document of Software testing
          </button>
        </div>
        <div class="crud-container">
          <h2>
            <span class="crud-emphasised-letter">D</span>elete
          </h2>
          <button className="demo-button">
            Delete Mobile development document
          </button>
          <button className="demo-button">
            Delete software testing available field
          </button>
        </div>
      </div>
      <div className="d-flex">
        <div className="border">
          <h3 class="output-header">Software Testing document call once</h3>
          <div className="output">
            {onceRead &&
              Object.keys(onceRead)
                .sort()
                .map((key) => {
                  if (key === "lessons" && onceRead["lessons"]) {
                    let object = onceRead["lessons"];
                    return (
                      <div>
                        {Object.keys(object)
                          .sort()
                          .map((date) => {
                            return (
                              <div>
                                <p>
                                  {date}: {object[date]}
                                </p>
                              </div>
                            );
                          })}
                      </div>
                    );
                  } else {
                    return (
                      <p>
                        {key}: {onceRead[key]}
                      </p>
                    );
                  }
                })}
          </div>
        </div>
        <div className="border">
          <h3 class="output-header">
            Software Testing document call with listener
          </h3>
          <div className="output">
            {listenerRead &&
              Object.keys(listenerRead)
                .sort()
                .map((key) => {
                  if (key === "lessons") {
                    let object = listenerRead["lessons"];
                    return (
                      <view>
                        {Object.keys(object)
                          .sort()
                          .map((date) => {
                            return (
                              <view>
                                <p>
                                  {date}: {object[date]}
                                </p>
                              </view>
                            );
                          })}
                      </view>
                    );
                  } else {
                    return (
                      <view>
                        <p>
                          {key}: {listenerRead[key]}
                        </p>
                      </view>
                    );
                  }
                })}
          </div>
        </div>
        <div className="border">
          <h3 class="output-header">Collection call with listener</h3>
          <div className="output">
            {allData &&
              Object.keys(allData)
                .sort()
                .map((dataK) => {
                  const data = allData[dataK];
                  return (
                    <div>
                      {Object.keys(data)
                        .sort()
                        .map((key) => {
                          if (key === "lessons") {
                            let object = data["lessons"];
                            return (
                              <view>
                                {Object.keys(object)
                                  .sort()
                                  .map((date) => {
                                    return (
                                      <view>
                                        <p>
                                          {date}: {object[date]}
                                        </p>
                                      </view>
                                    );
                                  })}
                              </view>
                            );
                          } else {
                            return (
                              <p>
                                {key}: {data[key]}
                              </p>
                            );
                          }
                        })}
                      <hr />
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
