import Link from 'next/link';

const handleLogout = () => {
  localStorage.removeItem('jwt');
}

const LoginLink = () => (
  <Link href="/account/login">
    <a style={linkStyle}>Log in</a>
  </Link>
)

const LogoutLink = () => (
  <Link href="/">
    <a onClick={handleLogout} style={linkStyle}>Log out</a>
  </Link>
)

type Props = {
  token?: string
}

const Header: React.FC<Props> = ({token}) => (
  <header style={headerStyle}>
    <nav style={navStyle}>
      <ul style={listStyle}>
        <li style={firstListItemStyle}>
          <Link href="/">
            <a style={linkStyle}>TheProject</a>
          </Link>
        </li>
        <li style={listItemStyle}>
          {token ? (<LogoutLink/>) : (<LoginLink/>)}
        </li>
        {!token && (
          <li style={listItemStyle}>
            <Link href="/account/register">
              <a style={linkStyle}>Sign up</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  </header>
);

const headerStyle = {
  borderBottom: '1px solid #DDD'
}

const navStyle = {
  margin: 20
}

const listStyle = {
  display: 'flex',
  flexWrap: 'wrap' as 'wrap'
}

const firstListItemStyle = {
  display: 'inline',
  flexGrow: 1,
  whiteSpace: 'nowrap' as 'nowrap'
}

const listItemStyle = {
  display: 'inline',
  whiteSpace: 'nowrap' as 'nowrap'
}

const linkStyle = {
  marginRight: 15
};

export default Header;