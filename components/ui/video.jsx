import React from 'react'
import ReactPlayer from 'react-player'

const Video = ({url}) => {
    return ( 
        <ReactPlayer
            //playing="true"
            url={url} 
            width="100%"
        />
     );
}
 
export default Video;
