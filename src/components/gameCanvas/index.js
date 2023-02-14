import React, { useEffect, useRef } from 'react';
import { useWindowSize } from "../../hooks/useWindowSize";
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

      c.fillStyle = "#FFF";
      c.fillRect(0, 0, canvas.width, canvas.height);

      game.update(timeDelta);
      window.requestAnimationFrame(update);
    }

    update();
    return () => {
      window.cancelAnimationFrame(update);
    }
  }, [])

  return (
    <canvas ref={canvasRef} width={width} height={height} />
  );
};

export default GameCanvas;