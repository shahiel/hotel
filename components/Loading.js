import React from 'react';
import loadingGif from "../images/gif/loading-gear.gif";

export default function Loading() {
    //loading gif for when retrieval of data is slow
    return (
        <div className="loading">
            <h4>rooms data loading</h4>
            <img src={loadingGif} alt="" />
        </div>
    )
}