import './App.css';
import React, {useState} from 'react';

function App() {

    const [data,
        setData] = useState([]);

    function SearchBook(searchQuery) {
        const apiUrl = `https://api.itbook.store/1.0/search/${searchQuery}`;
        fetch(apiUrl).then((response) => response.json()).then((data) => {
            console.log('This is your data', data.books);
            setData(data.books);

        });

    }

    function checkSearchQuery() {
        let searchQuery = document.getElementById("searchQuery");
        if (searchQuery.value !== "") {
            SearchBook(searchQuery.value);
        } else {
            return;
        }
    }

    const getData = () => 
      data.map((value, index) => {
        return <div key={index}>I am a user {value.title}</div>});

    return (
        <div>
            <p>You clicked the button times</p>
            <input type="text" id="searchQuery" placeholder="give the name of a book"/>

            <button onClick={checkSearchQuery}>Click me</button>

            <div>
            {getData}
            </div>

        </div>

    )

}

export default App;
