import React from 'react';
import Sound from 'react-sound';
import styles from './menu.module.css';
import Logo from '../../assets/images/logo.png';
import BgGif from '../../assets/images/background.gif';
import Play from '../../assets/images/play.png';
import MenuMusic from '../../assets/audio/music/MOON-Dust.mp3';

const Menu = ({ onPlay }) => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.video}
        src={BgGif}
        alt='Background'
      />
      <div className={styles.titleWrapper}>
        <img
          src={Logo}
          alt='Totsuka blade'
        />
        <h2>Web Edition</h2>
      </div>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          onClick={onPlay}
          src={Play}
          alt='play'
        />
        <div className={styles.menuBtn} style={{color: 'white', fontSize: 50, textAlign: 'center'}}>
          Settings
        </div>
      </div>
      <Sound
        url={MenuMusic}
        playStatus={Sound.status.PLAYING}
        loop={true}
        volume={50}
      />
    </div>
  );
};

export default Menu;