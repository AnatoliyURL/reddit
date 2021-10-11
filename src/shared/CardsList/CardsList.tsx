import React, { useContext } from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
import { postsContext } from '../context/postsContext';
import { IPost } from '../../hooks/usePostsData'

export function CardsList() {
    const dist = useContext(postsContext)

    return (
        <ul className={styles.cardsList}>
            {dist.map((post:IPost , index: number) => <Card userUrl={post.userUrl} userScrAva={post.userScrAva} userName={post.userName} dateCreate={post.dateCreate} postHref={post.postHref} postTitle={post.postTitle} postPreviewSrc={post.postPreviewSrc} key={index}/>)}
        </ul>
    );
}
