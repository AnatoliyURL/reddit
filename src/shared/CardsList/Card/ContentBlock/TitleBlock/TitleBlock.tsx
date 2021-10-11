import React, {useEffect, useRef, useState} from 'react';
import styles from './titleblock.css';
import {IPost} from '../../../../../hooks/usePostsData'
import {Post} from "../../../../Post";

export function TitleBlock({postTitle, postHref}: IPost) {

    const [isModalOpened, setIsModalOpened] = useState(false)

    return (
        <h2 className={styles.title}>
            <a href={'#'} className={styles.postLink} onClick={() => {
                setIsModalOpened(true)
            }}>
                {postTitle}
            </a>

            {isModalOpened && (
                <Post
                    onClose={() => setIsModalOpened(false)}
                />
            )}
        </h2>
    );
}
