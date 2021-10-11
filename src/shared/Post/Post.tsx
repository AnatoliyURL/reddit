import React, {useEffect, useRef} from 'react';
import styles from './post.css';
import ReactDom from "react-dom";
import {CommentForm} from "../CommentForm";

interface IPost {
    onClose?: () => void
}

export function Post(props: IPost) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                props.onClose?.()
            }
        }

        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])

    const node = document.querySelector('#modal_root')

    if (!node) return null

    return ReactDom.createPortal((
        <div className={styles.modal} ref={ref}>
            <h2>Проверка</h2>
            <div className={styles.content}>

            </div>

            <CommentForm />
        </div>
    ), node);
}
