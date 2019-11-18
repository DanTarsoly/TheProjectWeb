import Link from 'next/link';

const Header = () => (
  <header>
    <nav>
      <ul style={listStyle}>
        <li style={firstListItemStyle}>
          <Link href="/">
            <a style={linkStyle}>TheProject</a>
          </Link>
        </li>
        <li style={listItemStyle}>
          <Link href="/account/login">
            <a style={linkStyle}>Log in</a>
          </Link>
        </li>
        <li style={listItemStyle}>
          <Link href="/account/register">
            <a style={linkStyle}>Sign up</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

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