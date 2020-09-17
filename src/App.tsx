import * as React from 'react';
import CardList from './pages/components/card/card-list';
import { FormAdd } from './pages/components/form-add';
import { ICardProps } from './types/card-props';
import axios from 'axios';

export interface IAppProps {
  title:string
}

export function App (props: IAppProps) {

const[profiles,updateProfile]=React.useState<ICardProps[]>([])

const onClickAdd=async (userName:string)=>{
  
  const response = await axios.get(`https://api.github.com/users/${userName}`)
   const {name,avatar_url,company}=response.data;
   const profile:ICardProps={name,avatar_url,company}
   updateProfile([...profiles,profile]);
   
}
  return (
    <div>
    <div className="header">{props.title} </div>
    <FormAdd onSubmit={onClickAdd}/>
    <CardList profiles= {profiles}/>
    </div>
  );
}

 export default App