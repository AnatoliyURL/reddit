import React from "react";
import {IPostsData, usePostData} from './../../hooks/usePostsData'

export const postsContext = React.createContext<IPostsData>([])

export function PostsContextProvider({children}: {children: React.ReactNode}) {
    const [posts] = usePostData()

    return(
        <postsContext.Provider value={posts}>
            {children}
        </postsContext.Provider>
    )
}