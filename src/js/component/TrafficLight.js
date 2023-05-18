import React from "react";

const TrafficLight = ({selectedLight, selectedColor}) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-1 bg-black mx-auto" id="support"></div>
                </div>
                <div className="row">
                    <div className="col-1 bg-black mx-auto rounded-4 py-3" id="box">
                        <div className="row">
                            <button onClick={()=>{selectedLight("circleRed")}} className={`circleRed col-10 rounded-circle bg-danger mx-auto my-2 border-0 ${
                  selectedColor === "circleRed" ? " brillante1" : "border-0"}
                  `}></button>
                        </div>
                        <div className="row">
                            <button onClick={()=>{selectedLight("circleYellow")}} className={`circleYellow col-10 rounded-circle bg-warning mx-auto my-2 border-0 ${
                  selectedColor === "circleYellow" ? "brillante2" : "border-0"}`}></button>
                        </div>
                        <div className="row">
                            <button onClick={()=>{selectedLight("circleGreen")}} className={`circleGreen col-10 rounded-circle bg-success mx-auto my-2 border-0 ${
                  selectedColor === "circleGreen" ? "brillante3" : "border-0"}`}></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrafficLight;