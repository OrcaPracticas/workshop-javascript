import React from "react";
import ReactDOM from "react-dom";
import { Card } from "./react";
import Data from "./data/data.json";

console.time("React");
ReactDOM.hydrate(
    <div className="row">
        {
            Data.map((card, index) => {
                const KEY = `card-${index}`;
                return <Card {...Data[index]} key={KEY} />;
            })
        }
    </div>,
    document.getElementById("app"),
);
console.timeEnd("React");
