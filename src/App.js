import logo from './react-helmet.png';
import './App.css';
import SEO from './components/SEO';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test SEO plugin. <code>React Helmet</code>, check F12 plz.
        </p>
        <a
          className="App-link"
          href="https://github.com/nfl/react-helmet"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Helmet
        </a>
        <SEO title='爬蟲快來爬我' description='爬蟲給你點content' url='http://test.google.com/'>
          <meta name="description" content='測試 content 1' />
          <meta name="description" content='測試 content 2' />
          <meta name="description" content='測試 content 3' />
          <meta name="og:title" content='這是一個關於 React SEO 的程式碼, 爬蟲快來爬我' />
          <meta name="og:description" content='react-seo-helmet' />
          <meta name="og:url" content='https://rexhung0302.github.io/2022/02/18/20220218/' />
          <meta name="og:url" content='https://rexhung0302.github.io/react-seo-helmet/' />
          <meta property="og:site_name" content="React SEO helmet" />
        </SEO>
      </header>
    </div>
  );
}

export default App;
