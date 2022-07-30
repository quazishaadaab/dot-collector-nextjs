import React from "react";
import styles from "../../styles/list.module.scss"
import Datatable from "../../components/datatable/Datatable";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
const List = () => {
  return (
    <div className={styles.list}>
      <Sidebar />
      <div className={styles.listContainer}>
        <Navbar />

        <Datatable/>
      </div>
    </div>
  );
};

export default List;
