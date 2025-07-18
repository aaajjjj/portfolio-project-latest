import React, { useState, useEffect } from 'react';
import Typed from 'react-typed';

export default function Header() {
  const [quote, setQuote] = useState('Loading quote...');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    async function fetchQuote() {
      try {
        const res = await fetch('https://api.realinspire.live/v1//quotes/random');
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const data = await res.json();
        console.log(data)
        // Adjust the path based on the actual JSON format returned
        setQuote(data[0].content || 'Unknown quote');
        setAuthor(data[0].author || 'Unknown author');
      } catch (err) {
        console.error('Quote fetch error:', err);
        setQuote('Failed to load quote.');
        setAuthor('');
      }
    }

    fetchQuote();
  }, []);

  return (
    <div className="header-wraper" id="main">
      <div className="main-info">
        <Typed
          className="typed-text"
          strings={["Let's build something great."]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <div className="style_quotation">
          <p className="style_quote">
            <q>{quote}</q>
          </p>
          <p className="style_author">
            <cite>{author}</cite>
          </p>
        </div>
      </div>
    </div>
  );
}
