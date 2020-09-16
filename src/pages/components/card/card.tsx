import * as React from 'react';

export interface ICardProps {
}

export default class Card extends React.Component<ICardProps> {
  public render() {
    return (
        <div className="github-profile">
        <img src="https://placehold.it/75" />
      <div className="info">
        <div className="name">Name here...</div>
        <div className="company">Company here...</div>
      </div>
      </div>
    );
  }
}
