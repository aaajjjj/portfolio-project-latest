import { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Header() {
  const [quote, setQuote] = useState('Loading quote...');
  const [author, setAuthor] = useState('');
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ["Building production AI systems.", "Engineering data at healthcare scale.", "Let's build something great."],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    async function fetchQuote() {
      try {
        const res = await fetch('https://dummyjson.com/quotes/random');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setQuote(data.quote || 'Unknown quote');
        setAuthor(data.author || 'Unknown author');
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
        <span className="typed-text" ref={typedEl} />
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
