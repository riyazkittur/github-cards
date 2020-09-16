import * as React from 'react';
import Card from './pages/components/card/card';

export interface IAppProps {
  title:string
}

export function App (props: IAppProps) {
  return (
    <div className="header">
    {props.title}
    <Card/>
    </div>
  );
}

 export default App