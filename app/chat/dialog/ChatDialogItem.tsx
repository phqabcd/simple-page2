import React from 'react';
import './ChatDialogList.css'; // 引入CSS样式文件

interface ChatDialogItemProps {
    avatar: string;
    subTitle: string;
    timestamp: number;
    title: string;
    count: number;
}

const ChatDialogItem: React.FC<ChatDialogItemProps> = ({ avatar, subTitle, timestamp, title, count }) => {
    // 格式化时间戳
    const formattedTimestamp = new Date(timestamp).toLocaleTimeString();

    return (
        <div className="chat-dialog-item">
            <div className="avatar-container">
                <img src={avatar} className="avatar" />
                {count > 0 && (
                    <span className="count-badge">{count > 99 ? '99+' : count}</span>
                )}
            </div>
            <div className="content">
                <div className="title-container">
                    <h2 className="title">{title}</h2>
                    <p className="timestamp">{timestamp}</p>
                </div>
                <h3 className="sub-title">{subTitle}</h3>
            </div>
        </div>
    );
};

export default ChatDialogItem;