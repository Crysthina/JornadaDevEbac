import React, { useRef, useState } from "react";
import VideoFooter from "./componentes/footer/VideoFooter";
import VideoSidebar from "./componentes/sidebar/VideoSidebar";
import "./video.css";

function Video({ likes, messages, shares, name, description, music, url }) {
  /*funcionalidade do video*/
  /*useref para ação; useState para o estado atual do video, solicitando pausa com o novo clique*/
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    /*função criada para quando um clique for iniciado na tela, o video comece: assim anulando a função control utilizada pelo css*/

    if (play) {
      /* video play, pausa 'setPlay'*/
      videoRef.current.pause();
      setPlay(false);
    } else {
      /* video play, pausa 'setPlay'*/
      videoRef.current.play();
      setPlay(true);
    }
  }

  /*visual - sera visto no app*/
  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        /*'controls' - comando de play anulado, será substituido pelo "useRef", ficará invisivel no display*/
        loop
        src={url}
      ></video>
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
      <VideoFooter name={name} description={description} music={music} />
    </div>
  );
}

export default Video;
