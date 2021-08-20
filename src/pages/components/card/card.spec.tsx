import React from 'react';
import {render,screen} from '@testing-library/react';
import Card from './card';
import { ICardProps } from '../../../types/card-props';
describe('test card',()=>{
    it('load card with img',()=>{

        const cardProps:ICardProps={
            name:"",
            avatar_url:"",
            company:""
        }
        render(<Card {...cardProps}/>);
        expect(screen.getByRole('img')).toBeInTheDocument();
    })
    it('load card with img alt as X',()=>{
        const cardProps:ICardProps={
            name:"",
            avatar_url:"",
            company:""
        }
        const {getByAltText} = render(<Card {...cardProps}/>);
       expect(getByAltText("X")).toBeInTheDocument();
          
    })
    it('load card with name Riyaz',()=>{
        const cardProps:ICardProps={
            name:"Riyaz",
            avatar_url:"",
            company:""
        }
        const {getByText} = render(<Card {...cardProps}/>);
        expect(getByText("Riyaz")).toBeInTheDocument();
    })
    it('load card with company name ABB',()=>{
        const cardProps:ICardProps={
            name:"Riyaz",
            avatar_url:"",
            company:"ABB"
        }
        const {getByText} = render(<Card {...cardProps}/>);
        expect(getByText("ABB")).toBeInTheDocument();
    })
})