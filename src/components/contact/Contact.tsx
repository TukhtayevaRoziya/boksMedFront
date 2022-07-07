import React, { FC } from "react";
import { Breadcrumb } from "antd";

import main from '../../assets/contact.png'

import styles from "./Contact.module.css";
import MyForm from './Form';

const Contact: FC = () => {
  return (
    <div className={styles.body}>
      <Breadcrumb>
        <Breadcrumb.Item>Главная</Breadcrumb.Item>
        <Breadcrumb.Item>Обратный звонок</Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles.block}>
        <div className={styles.title__block}>
          <div>
            <h1>Заказать обратный звонок</h1>
            <p>
              Оставьте свои контакты - наш специалист свяжется с Вами в рабочее
              время.
            </p>
          </div>
          <img src={main} alt=''/>
        </div>
        <div className={styles.main__block}>
            <MyForm/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
