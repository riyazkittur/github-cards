import * as React from 'react';

export interface IFormProps {
  onSubmit:Function
}

export function FormAdd (props: IFormProps) {
  const [name,setName]=React.useState('')
  const onFormSubmit =(event:React.FormEvent)=>{
    event.preventDefault();
    props.onSubmit(name);
    setName('')
  }
  return (
    <form onSubmit={onFormSubmit}>
      <input value={name} placeholder="enter a github username" onChange={e=>setName((e.target as HTMLInputElement).value)}/>
      <button>Add</button>
    </form>
  );
}
