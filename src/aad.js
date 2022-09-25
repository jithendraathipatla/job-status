import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [Data, setData] = useState("");
  


  useEffect(() => {
    axios
      .get("http://localhost:5000/", { crossdomain: true })
      .then((response) => {
        setData(response.data.recordset);
        //setAuthor(response.data.author);
        localStorage.setItem(
          "globaldata",
          JSON.stringify(response.data.recordset)
        );
      });
  }, []);

  console.log(Data);

  const global_data = JSON.parse(localStorage.getItem("globaldata"));
  //global_data.par

  console.log(global_data);

  const filtered_creoEgs = global_data.filter((item) => {
    return item.jobtypeid === "7";
  });

  const filtered_creo = global_data.filter((item) => {
    return item.jobtypeid === "2";
    //  setcreo((item.jobtypeid === "2"));
    //  setcreoSuccessfull([item.statusid == "5" && item.jobtypeid === "2"]);
    //  setcreoError([item.statusid == "6" && item.jobtypeid === "2"]);
  });

  const filtered_reports = global_data.filter((item) => {
    return item.jobtypeid === "3";
  });

  const filtered_ppbip = global_data.filter((item) => {
    return item.jobtypeid === "4";
  });

  console.log(filtered_creoEgs.length, filtered_creo.length);
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <div>Total Number of Jobs</div>
            <div>{global_data.length}</div>
          </div>
          <div>
            <div>CREO</div>
            {/* <div>total number of jobs:{creo.length}</div>
            <div>Done:{creoSuccessfull.length}</div>
            <div>Done with errors:{creoError.length}</div> */}
          </div>
          <div>
            <div>CREO_EGS</div>
            <div>{filtered_creoEgs.length}</div>
          </div>

          <div>
            <div>Reports</div>
            <div>{filtered_reports.length}</div>
          </div>

          <div>
            <div>ppbip</div>
            <div>{filtered_ppbip.length}</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
