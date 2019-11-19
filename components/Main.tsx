import {ReactNode} from 'react';

type Props = {
  childern?: ReactNode
}

const Header: React.FC<Props> = ({children}) => (
  <main>
    {children}
  </main>
);
export default Header;