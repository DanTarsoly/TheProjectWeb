import Header from './Header';
import { ReactNode, useState, useEffect} from 'react';

type Props = {
  children?: ReactNode
}

const Layout: React.FC = ({children}) => {
  const [token, setToken] = useState();
  useEffect(() => {
    const storedToken = localStorage.getItem('jwt');
    if (token != storedToken) setToken(storedToken);
  });
  
  return (
    <div style={layoutStyle}>
      <Header token={token}/>
      {children}

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
        }

        body {
          @include background;
          background: #333;
          color: #EEE;
          height: 100%;
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          }
        }

        main,
        div {
          border-radius: 3px;
        }

        li {
          list-style: none;
        }

        a {
          text-decoration: none;
          color: white;
        }
        a:hover {
          opacity: 0.6;
        }

        input {
          background: #eee;
          border: none;
          border-radius: 3px;
          padding: 5px;
        }

        button {
          background: #fff;
          color: #333;
          font-weight: bold;
          border: none;
          border-radius: 3px;
          padding: 5px;
        }
        button:hover {
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
}

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

export default Layout;