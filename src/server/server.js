import express from 'express'
import ReactDom from 'react-dom/server'
import {indexTemplate} from "./indexTempale";
import {App} from "../App";
import axios from "axios";

const app = express()

app.use('/static', express.static('./dist/client'))

app.get('/', (req, res) => {
    res.send(
        indexTemplate(ReactDom.renderToString(App()))
    )
})

app.get('/auth', (req, res) => {
    axios.post(
        'https://www.reddit.com/api/v1/access_token',
        `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
        {
            auth: { username: process.env.CLIENT_ID, password: 'zjV4zPn_oqYqy9M_Lr1qTn3P3V6mZQ'},
            headers: { 'Content-type': 'application/x-www-form-urlencoded' }
        }
    )
        .then(({data}) => {
            res.send(
                indexTemplate(ReactDom.renderToString(App()),data['access_token'])
            )
        })
        .catch(console.log)
})

app.listen(3000, () => {
    console.log('Start server')
})