import React, {useEffect, useState} from "react";
import './main.global.css'
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {useToken} from "./hooks/useToken";
import {tokenContext} from "./shared/context/tokenContext";
import {PostsContextProvider} from "./shared/context/postsContext";
import {UserContextProvider} from "./shared/context/userContext";
import {commentContext} from "./shared/context/commentContext";
import {CommentForm} from "./shared/CommentForm";

function AppComponent() {
    const [commentValue, setCommentValue] = useState('')

    const [token] = useToken()

    const CommentProvider = commentContext.Provider

    return(
        <CommentProvider value={{
            value: commentValue,
            onChange: setCommentValue
        }} >
            <tokenContext.Provider value={token}>
                <PostsContextProvider>
                    <UserContextProvider>
                        <Layout>
                            <Header />
                            <Content>
                                <CardsList />
                            </Content>
                        </Layout>
                    </UserContextProvider>
                </PostsContextProvider>
            </tokenContext.Provider>
        </CommentProvider>

    )
}

export const App = hot(() => <AppComponent />)