import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";

export type IPostsData = IPost[]

export interface IPost {
    postTitle?: string
    userScrAva?: string
    userName?: string
    dateCreate?: string
    postHref?: string
    postPreviewSrc?: string
    userUrl?: string
}

export function usePostData() {
    const [posts, setPosts] = useState<IPostsData>([])
    const token = useContext(tokenContext)

    useEffect(() => {
        axios.get('https://oauth.reddit.com/best', {
            headers: {Authorization: `bearer ${token}`}
        })
            .then((resp) => {
                const data = resp.data.data.children
                let userData: IPostsData = [];

                data.map(function (post:any, index: number){
                    let data:IPost = {}

                    data.userName = post.data.author
                    data.dateCreate = post.data.created
                    data.postHref = post.data.url
                    data.postTitle = post.data.title
                    data.postPreviewSrc = post.data.thumbnail

                    userData.push(data)
                })

                setPosts(userData)
            })
            .catch(console.log)
    }, [token])

    return [posts]
}