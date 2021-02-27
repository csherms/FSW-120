import React from 'react';
import BlogList from './components/BlogList';
import Footer from './components/Footer';
import './components/blogdata';
import Header from './components/Header'
import './styles.css'





function App(){
    return(
        <div>
            <Header />
            <BlogList />
            <Footer />
        </div>
    )
}
export default App;