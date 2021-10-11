import React from 'react';
import styles from './menuitemslist.css';
import {EColor, Text} from "../../../../Text";
import {EIcon, Icon} from "../../../../Icon";

interface IMenuItemsList {
    postId: string
}

export function MenuItemsList({postId}: IMenuItemsList) {
    return (
        <ul className={styles.menuItemsList}>
            <li className={`${styles.menuItem} ${styles.commentsButton}`} onClick={() => console.log(postId)}>
                <Icon name={EIcon.comments} size={[15, 15]}/>
                <Text size={12} color={EColor.grey99}>
                    Комментарии
                </Text>
            </li>
            <div className={styles.divider}/>
            <li className={`${styles.menuItem} ${styles.shareButton}`} onClick={() => console.log(postId)}>
                <Icon name={EIcon.shared} size={[12, 14]} />
                <Text size={12} color={EColor.grey99}>
                    Поделиться
                </Text>
            </li>
            <div className={styles.divider}/>
            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <Icon name={EIcon.block} size={[14, 14]}/>
                <Text size={12} color={EColor.grey99}>
                    Скрыть
                </Text>
            </li>
            <div className={styles.divider}/>
            <li className={`${styles.menuItem} ${styles.saveButton}`} onClick={() => console.log(postId)}>
                <Icon name={EIcon.save} size={[14, 14]}/>
                <Text size={12} color={EColor.grey99}>
                    Сохранить
                </Text>
            </li>
            <div className={styles.divider}/>
            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <Icon name={EIcon.warning} size={[16, 14]} />
                <Text size={12} color={EColor.grey99}>
                    Пожаловаться
                </Text>
            </li>
        </ul>
    );
}
