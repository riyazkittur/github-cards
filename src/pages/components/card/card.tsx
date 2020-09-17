/*
	const testData = [
			{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  		{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
	];
*/
import * as React from 'react';
import {ICardProps} from '../../../types/card-props'


export default function Card (props:ICardProps) {
      const{name,avatar_url,company}=props;
    return (
        <div className="github-profile">
        <img src={avatar_url} alt="X"/>
      <div className="info">
        <div className="name">{name}</div>
        <div className="company">{company}</div>
      </div>
      </div>
    );
  }

