
import { Header } from './components/Header'
import { AddTodo } from './components/AddTodo'
import { Tasks } from './components/Tasks'

import styles from './App.module.css';

import { useState ,FormEvent, ChangeEvent, InvalidEvent,MouseEvent} from 'react'; 


import './global.css';


export interface DataProps {
  id:number;
  done: boolean;
  info: string;
}


function App() {

  const [ newToDoItem , setNewToDoItem ] = useState<string>('')
  
  const [ toDoList , setToDoList ] = useState<DataProps[] >([])

  function handleCreateNewTodo(event: FormEvent){

    event.preventDefault()

    const nextId = toDoList.length

    const newTodoObj = {
      id:nextId,
      done:false,
      info:newToDoItem
    }

    setToDoList([...toDoList,newTodoObj])

    setNewToDoItem('')
  }

  function handleNewTodoChange(event: ChangeEvent<HTMLTextAreaElement>){

    console.log(event.target.value)

    event.target.setCustomValidity('')

    setNewToDoItem(event.target.value)

  }

  function handleNewTodoInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function handleToogleCheckBox(event: MouseEvent<HTMLButtonElement>,data:DataProps) {
    event.preventDefault()
 
    const findIndexOfData = toDoList.findIndex(value=>value===data)
    const copyTodoList = toDoList.map(v=>v)

    copyTodoList[findIndexOfData] =  {
      info: data.info,
      id: data.id,
      done:!data.done
    }
 
    setToDoList(copyTodoList)
 
  }

  function handleDeleteTodo(event: MouseEvent<HTMLButtonElement>,data:DataProps) {
    event.preventDefault()
 
   
    const findIndexOfData = toDoList.findIndex(value=>value===data)
    const copyTodoList = toDoList.map(v=>v)
 
     copyTodoList.splice(findIndexOfData,1)
  
     setToDoList(copyTodoList)
  }

  return (
    <div className={styles.wrapper}>
        <Header />

        <AddTodo 
          handleNewTodoChange={handleNewTodoChange}
          handleCreateNewTodo={handleCreateNewTodo}
          handleNewTodoInvalid={handleNewTodoInvalid}
          info={newToDoItem}
        />

        <Tasks
           data={toDoList}
           handleToogleCheckBox={handleToogleCheckBox}
           handleDeleteTodo={handleDeleteTodo}
        />

 
    </div>
  )
}

export default App


