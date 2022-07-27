import React, { useEffect, useRef } from "react";


//넥슨게임즈 판교 지도

function KakaomapPangyo(){
    const { kakao } = window;
    const container = useRef(null)
    const options={
            center : new kakao.maps.LatLng(37.400405419349134, 127.10311965948203),
            level:2
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

export default KakaomapPangyo;
