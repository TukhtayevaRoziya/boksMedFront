import React from "react";

import { BsTelegram, BsWhatsapp } from "react-icons/bs";
import { FaViber } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { IoStatsChart } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

import logo from "../assets/icons/logo.png";

import styles from "./TopHeader.module.css";
import { NavLink } from "react-router-dom";

const TopHeader = () => {
  return (
    <>
    <div className={styles.body}>
      <img className={styles.img} src={logo} alt="" />
      <div className={styles.catalog}><HiMenuAlt3 /> КАТАЛОГ</div>
      <div className={styles.search}>
        <BsSearch />
        <input type="search" placeholder="Поиск медицинского оборудования" />
      </div>
      <div className={styles.call}><FiPhoneCall /> Заказать обратный звонок</div>
      <div className={styles.phone}>8 (3412) 65-08-77</div>
      <div className={styles.socialNetwork}>
        <h1><FaViber/></h1>
        <h1><BsTelegram/></h1>
        <h1><BsWhatsapp/></h1>
      </div>
    </div>
    <div className={styles.navbar}>
      <div className={styles.navbar__main}>
        <NavLink to={'/about'}>О компании</NavLink>
        <NavLink to={'/producers'}>Производители</NavLink>
        <NavLink to={'/delivery'}>Доставка</NavLink>
        <NavLink to={'/delivery'}>Оплата</NavLink>
        <NavLink to={'/news'}>Новости</NavLink>
        <NavLink to={'/delivery'}>Реквизиты</NavLink>
        <NavLink to={'/contact'}>Контакты</NavLink>
      </div>
      <div className={styles.navbar__other}>
      <div className={styles.navbar__other__block}>
        <IoStatsChart />
        <h1>Сравнения</h1>
      </div>
      <div className={styles.navbar__other__block}>
        <FaShoppingCart />
        <h1>Корзина</h1>
      </div>
      <div className={styles.navbar__other__block}>
        <BsFillPersonLinesFill />
        <h1>Личный кабинет</h1>
      </div>
      </div>
    </div>
    </>
  );
};

export default TopHeader;
