import styles from './AddTodo.module.css'
import mais from '../assets/mais.svg'
import {  ChangeEvent, FormEvent,InvalidEvent  } from 'react';

interface AddTodoProps{
    handleCreateNewTodo:(event: FormEvent)=>void;
    handleNewTodoChange:(event: ChangeEvent<HTMLTextAreaElement>)=>void;
    handleNewTodoInvalid:(event: InvalidEvent<HTMLTextAreaElement>)=>void;
    info?: string;
} 


 
export function AddTodo({handleCreateNewTodo,handleNewTodoChange,handleNewTodoInvalid,info}:AddTodoProps){
    return(
        <form   onSubmit={handleCreateNewTodo}  className={styles.div}>
            <textarea 
                name='todo'
                placeholder='Adicione uma nova tarefa'
                onChange={handleNewTodoChange} 
                onInvalid={handleNewTodoInvalid}
                value={info}
                required
                />
            <button 
                type="submit"
            >
              Criar
                 <img  src={mais} />
            </button>

        </form>
        
    )
}