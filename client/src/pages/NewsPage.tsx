import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Layout from "../components/Layout";
import NewsCard from '../components/NewsCard';

interface News {
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}


export default function NewsPage() {

    const [news, setNews] = useState([]);
    const [isLoad, setIsLoad] = useState(true);

    const fetchNews = () => {
        return axios.request(
            {
                'method': 'GET',
                'url': 'https://newsapi.org/v2/everything?q=technology&apiKey=987268c1d99c499298f567576900915c'
            })
            .then(function (response: any) {
                return response.data.articles;
            })
    }

    useEffect(() => {
        const getNews = async () => {
            setIsLoad(false);
            setNews(await fetchNews());
            setIsLoad(true);
        }

        getNews();
    }, [])

    return (
        <Layout page="News">
            {isLoad ? (
                <main className="main news">
                    <div className="container">
                        <NewsCard />
                    </div>
                </main>
            ) : <main className="main news"></main>}
        </Layout>
    )
}
