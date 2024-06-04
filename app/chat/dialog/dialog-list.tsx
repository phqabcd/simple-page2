
import React from 'react';
import styles from "./dialog-list.module.scss";
import ChatDialogItem from './ChatDialogItem';


// 生成对话框列表
let chatDialogList = [
    {
        avatar: './bugstack.png',
        subTitle: 'Hello there!',
        timestamp: Date.now() - 1000 * 60 * 60 * 24, // 1天前的时间戳
        title: 'User 1',
        count: 100,
    },
    {
        avatar: './bugstack.png',
        subTitle: 'Meeting update',
        timestamp: Date.now() - 1000 * 60 * 60 * 12, // 12小时前的时间戳
        title: 'User 2',
        count: 2,
    }
    // 可以继续添加更多对话框项...
];

export  function DialogList(){

    return (
        <div className={styles["dialog-list"]}>
            {chatDialogList.map((item, index) => (
                <ChatDialogItem
                    key={index} // 最好使用唯一标识符作为key，这里为了简单使用了索引
                    avatar={item.avatar}
                    subTitle={item.subTitle}
                    timestamp={item.timestamp}
                    title={item.title}
                    count={item.count}
                />
            ))}
        </div>
    );
}