import React, { useState, FC } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Drawer, Space } from "antd";

import logo from "../../assets/icons/logo.webp";

import styles from "./TopHeader.module.css";
import { FiPhoneCall } from 'react-icons/fi';
import { FaViber } from 'react-icons/fa';
import { BsTelegram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

const TopHeaderSm: FC = () => {
  const [visible, setVisible] = useState(false);

  const data = [
    { id: 1, to: "/about", name: "О компании" },
    { id: 2, to: "/delivery", name: "Доставка" },
    { id: 3, to: "/delivery", name: "Оплата" },
    { id: 4, to: "/news", name: "Новости" },
    { id: 5, to: "/delivery", name: "Реквизиты" },
    { id: 6, to: "/contact", name: "Контакты" },
  ];

  const dataMap = data.map((d) => (
    <NavLink key={d.id} to={d.to}>
      {d.name}
    </NavLink>
  ));
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Space className={styles.navbarSm}>
        <img className={styles.img} src={logo} alt="" />

        <button onClick={showDrawer} className={styles.spanNavBtn}>
          <AiOutlineBars />
        </button>
      </Space>
      <Drawer
        title={<img className={styles.img} src={logo} alt="" />}
        placement={"top"}
        width={500}
        onClose={onClose}
        visible={visible}
        height={'auto'}
        extra={<Space></Space>}
      >
          <div className={styles.navbar__main_sm}>{dataMap}</div>
          <div className={styles.call_sm}>
          <FiPhoneCall /> Заказать обратный звонок
        </div>
        <div className={styles.phone_sm}>8 (3412) 65-08-77</div>
        <div className={styles.socialNetwork_sm}>
          <h1>
            <FaViber />
          </h1>
          <h1>
            <BsTelegram />
          </h1>
          <h1>
            <BsWhatsapp />
          </h1>
        </div>
      </Drawer>
    </>
  );
};

export default TopHeaderSm;
