import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

interface News {
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}

export default function NewsCard(props: any) {
    return (
        <section className="news__card">

        </section>
    )
}
