import React, { useState } from 'react';
import UserInfo from '../../component/UserInfo';
import NavbarComponent from '../../component/NavComponent';
import { Outlet } from 'react-router-dom';
import style from '../../component/Component.css';

function Home(props) {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <UserInfo getName={props.name}/>
                <NavbarComponent setName={props.setName}/>
                <div className={style.content}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Home;
