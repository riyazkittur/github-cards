import React from 'react';
import {render} from '@testing-library/react';
import CardList from './card-list';
import { ICardProps } from '../../../types/card-props';

describe('test card list',()=>{

    it('load card list page',()=>{

        const props:ICardProps[]=[]
        render(<CardList profiles={props} />)
        expect(screen).toBeDefined();
    })
})