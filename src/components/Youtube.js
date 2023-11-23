import React from "react";
import YouTube from "react-youtube";

function youtube(props){
    return(
        <>
        <YouTube
        videoId={props.link}
        className="iframe"
        containerClassName="youtube"
        />
        </>
    );
}
export default youtube;