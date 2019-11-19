import {ReactNode} from 'react';

type Props = {
  children?: ReactNode
}

const ErrorBox: React.FC<Props> = ({children}) => (
  <div style={boxStyle}>
    {children}
  </div>
);

const boxStyle = {
  color: '#333',
  background: 'lightsalmon',
  marginTop: '5px',
  padding: '2px 5px 2px 5px',
  borderRadius: 4
}

export default ErrorBox;