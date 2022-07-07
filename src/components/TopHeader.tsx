import React from "react";
import { BsTelegram, BsWhatsapp } from "react-icons/bs";
import { FaViber } from "react-icons/fa";

import logo from "../assets/icons/logo.png";

import styles from "./TopHeader.module.css";

const TopHeader = () => {
  return (
    <div className={styles.body}>
      <img className={styles.img} src={logo} alt="" />
      <div className={styles.katalog}>КАТАЛОГ</div>
      <div className={styles.search}>
        <input type="search" placeholder="Поиск медицинского оборудования" />
      </div>
      <div className={styles.call}>Заказать обратный звонок</div>
      <div className={styles.phone}>8 (3412) 65-08-77</div>
      <div className={styles.socialNetwork}>
        <h1><FaViber/></h1>
        <h1><BsTelegram/></h1>
        <h1><BsWhatsapp/></h1>
      </div>
    </div>
  );
};

export default TopHeader;
