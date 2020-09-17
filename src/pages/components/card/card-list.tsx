import * as React from 'react';
import {ICardProps} from '../../../types/card-props'
import Card from './card';
export interface ICardListProps {
    profiles:ICardProps[]
}

export function CardList (props: ICardListProps) {
    const cardComponents=props.profiles.map(profile=><Card key={profile.name} {...profile}/>)
  return (
    <div>
      {cardComponents}
    </div>
  );
}
export default CardList;