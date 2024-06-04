'use client';

import Link from 'next/link';
import Image from "next/image";
import styles from "./sidebar.module.scss";

export default function SideNav() {
    return (
        <div className={styles["sidebar"]}>

            <div className={styles["action-button"]}>

            </div>

             <div className={styles["sidebar-header"]}>
                 <Link href="#">
                     <Image
                         src="/chatgpt.svg"
                         alt="chatgpt"
                         layout = "fill"
                         />
                 </Link>
             </div>
            <div className={styles["sidebar-chat"]}>
                <Link href="/chat">
                    <Image
                        src="/chat.svg"
                        alt="chat"
                        layout = "fill"
                    />
                </Link>
            </div>
            <div className={styles["sidebar-role"]}>
                <Link href="/chat/role">
                    <Image
                        src="/role.svg"
                        alt="role"
                        layout = "fill"
                    />
                </Link>
            </div>
        </div>
    );
}
