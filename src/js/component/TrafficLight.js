import React from "react";

const TrafficLight = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-1 bg-black mx-auto" id="support"></div>
                </div>
                <div className="row">
                    <div className="col-1 bg-black mx-auto rounded-4 py-3" id="box">
                        <div clasName="row">
                            <button className="circleRed col-12 rounded-circle bg-danger my-2 border-0"></button>
                        </div>
                        <div clasName="row">
                            <button className="circleYellow col-12 rounded-circle bg-warning my-2 border-0"></button>
                        </div>
                        <div clasName="row">
                            <button className="circleGreen col-12 rounded-circle bg-success my-2 border-0"></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrafficLight;