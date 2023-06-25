
import checked from '../assets/checked.svg'
import unchecked from '../assets/unchecked.svg'
import trash from '../assets/trash.svg'

import styles from './NewTask.module.css'
import { MouseEvent } from 'react';


interface DataProps {
    id:number;
    done: boolean;
    info: string;
}
interface Props {
    data:DataProps;
    handleToogleCheckBox:(event: MouseEvent<HTMLButtonElement>,data:DataProps)=>void;
    handleDeleteTodo:(event: MouseEvent<HTMLButtonElement>,data:DataProps)=>void;

    func2?:()=>void;
}

 

export function NewTask({
    data,
    handleToogleCheckBox,
    handleDeleteTodo
}:Props){
    return(
        <div className={styles.container}>
                <button   
                     onClick={(e) =>handleToogleCheckBox(e, data)}
                     className={styles.checkbox}
                > 
                    <img src={data.done ?  checked : unchecked}/> 
                 </button>

            <div className={styles.info}>{data.info}</div>

                <button  
                     onClick={(e) =>handleDeleteTodo(e, data)}
                     className={styles.trashbutton} 
                >
                    <img src={trash}/> 
                </button>

        </div>
    )
} 