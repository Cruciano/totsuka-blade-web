import React, { useEffect, useRef } from 'react';
import { useWindowSize } from "../../hooks/useWindowSize";
import styles from './gameCanvas.module.css';
import BgGif from '../../assets/images/background-game.gif';
import Game from "../../gameEngine/game";

const GameCanvas = () => {
  const { width, height } = useWindowSize();
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext('2d');
    const game = new Game(canvas, c);

    let prevFrameTime = window.performance.now();

    const update = () => {
      let curFrameTime = window.performance.now();
      let timeDelta = (curFrameTime - prevFrameTime) / 1000;
      prevFrameTime = curFrameTime;

      if (timeDelta > 0.25) {
        timeDelta = 0.25;
      }
      
      c.clearRect(0, 0, canvas.width, canvas.height);

      game.update(timeDelta);
      window.requestAnimationFrame(update);
    }

    game.start();
    update();

    return () => {
      window.cancelAnimationFrame(update);
      game.end();
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.background}
        src={BgGif}
        alt="background"
      />
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};

export default GameCanvas;