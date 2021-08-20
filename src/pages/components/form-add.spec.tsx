import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import { FormAdd, IFormProps } from './form-add';

describe('Add Form test',()=>{

    it('Add form has correct prop type',()=>{
        const props:IFormProps={
            onSubmit:Function
        }
        render(<FormAdd {...props}/>)
        expect(screen).toBeDefined();
    })

    it('contains textbox with placeholder enter a github username',()=>{
        const props:IFormProps={
            onSubmit:Function
        }
      const {getByPlaceholderText}=  render(<FormAdd {...props}/>);
      expect(getByPlaceholderText("enter a github username")).toBeInTheDocument();
    })
    it('contains textbox with empty value',()=>{
        const props:IFormProps={
            onSubmit:Function
        }
    //   const {getByDisplayValue}=  render(<FormAdd {...props}/>);
    //   expect(getByDisplayValue("")).toBeInTheDocument();
    const {getByRole}= render(<FormAdd {...props}/>);
    expect(getByRole("textbox")).toHaveValue("");
    })
    it('contains button',()=>{
        const props:IFormProps={
            onSubmit:Function
        }
      const {getByRole}=  render(<FormAdd {...props}/>);
      expect(getByRole("button")).toBeVisible();
      
    
    })
    it('fire onFormSubmit only 1 time',()=>{
       
        const props:IFormProps={
            onSubmit:jest.fn()
        }
       const {getByRole}= render(<FormAdd {...props}/>);
        fireEvent.click(getByRole('button'));
        expect(props.onSubmit).toHaveBeenCalledTimes(1);
    })
    it('clear input after onFormSubmit',async()=>{
       
        const props:IFormProps={
            onSubmit:jest.fn()
        }
       const {getByRole}= render(<FormAdd {...props}/>);
        fireEvent.click(getByRole('button'));
        expect(getByRole('textbox')).toHaveValue("");
    })
})