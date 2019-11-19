import { ReactNode, useState, useEffect} from 'react';
import Header from './Header';
import Main from './Main';

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
    <div className='layout'>
      <Header token={token}/>
      <Main>
        {children}  
      </Main>

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

export default Layout;