import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = (props: any) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}

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

      ul {
        padding-left: 10px;
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
    `}</style>
  </div>
  
);

export default Layout;