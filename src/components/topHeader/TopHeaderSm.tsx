import React, { useState, FC } from "react";
import { Drawer, Space } from "antd";
import { AiOutlineBars } from "react-icons/ai";

import logo from "../../assets/icons/logo.webp";

import styles from "./TopHeader.module.css";

const TopHeaderSm: FC = () => {
  const [visible, setVisible] = useState(false);

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
        extra={<Space></Space>}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default TopHeaderSm;
