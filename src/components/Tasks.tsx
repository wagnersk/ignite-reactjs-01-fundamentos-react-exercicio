import styles from './Tasks.module.css'
import clipboard from '../assets/clipboard.svg'

import { NewTask } from './NewTask'
import { MouseEvent } from 'react';


export interface DataProps {
  id:number;
  done: boolean;
  info: string;
  }

  export interface Data {
    data:DataProps[]
    handleToogleCheckBox:(event: MouseEvent<HTMLButtonElement>,data:DataProps)=>void;
    handleDeleteTodo:(event: MouseEvent<HTMLButtonElement>,data:DataProps)=>void;

  }

export function Tasks({data,handleToogleCheckBox,handleDeleteTodo}: Data){
  const totalDone = data.filter(v=>v.done===true)
  
    return(
        <div className={styles.wrapper}>

            <div className={styles.topContainer}>
                
                 <div className={styles.topLeft}>
                    <strong>Tarefas Criadas <span className={styles.ball}>{data.length}</span> </strong>
                </div>

                <div className={styles.topRight}>
                <strong> Concluídas <span className={styles.ball}>{totalDone.length} de {data.length}</span> </strong>
                </div>
            </div>

        { !true  ? <div className={styles.bottomContainer} >

                 <img 
                    src={clipboard}
                    width={56} 
                    height={56}
                 />
                 <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                 <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
            :
            data.length > 0 && data.map(value=>{
                return(
                    <NewTask
                      data={value}
                      key={value.id}
                      handleToogleCheckBox={handleToogleCheckBox}
                      handleDeleteTodo={handleDeleteTodo}
                    />
                    )
            })
    
        }
       </div>        
     )
}