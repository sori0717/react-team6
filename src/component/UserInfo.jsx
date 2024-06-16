import React, { useState } from 'react';

const styles = {
    userInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%' 
    },
    heading: {
        margin: 5 
    }
}

function UserInfo(props) {

    const today = new Date();    
    const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    return (
        <div style={styles.userInfo}>
            <h2 style={styles.heading}>{props.getName === "" ? "6팀 프로젝트" : props.getName+"의 페이지" }</h2>
            <h4 style={styles.heading}>날짜 : {formattedDate}</h4>
        </div>
    );
}

export default UserInfo;