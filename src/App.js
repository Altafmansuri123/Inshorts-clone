// import logo from './logo.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import NavInShorts from './Components/NavInShorts';
import apiKey from './data/config';
import NewsContent from './NewsContent/NewsContent';

function App() {

    const [category, setCategory] = useState("general");
    const [NewsArray, setNewsArray] = useState([]);
    const [NewsResults, setNewsResults] = useState(0);

    const newsApi = async () => {
        try {

            const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}`)

            console.log(news);
            setNewsArray(news.data.articles);
            setNewsResults(news.data.totalResults);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        newsApi()
    }, [NewsResults, category])
    return (

        <div className="App">
            <NavInShorts setCategory={setCategory} />
            <NewsContent />
            <Footer />
        </div>


    );
}

export default App;