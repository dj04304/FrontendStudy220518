import React, { useEffect, useRef } from "react";


function KakaomapSeoul(){
    const { kakao } = window;
    const container = useRef(null)
    const options={
            center : new kakao.maps.LatLng(37.48524822951953, 127.03661687093175),
            level:5
    }

    useEffect(() => {
        new kakao.maps.Map(container.current,options)
        return () => {};
      }, []);

    return(
        <div id="map" ref={container} style={{
            width:'600px',
            height:'300px'
        }}>
        </div>
    )
}

export default KakaomapSeoul;
