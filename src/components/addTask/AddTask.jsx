import { FaTrashAlt } from "react-icons/fa";
import { MdRadioButtonUnchecked, MdCheckCircle } from "react-icons/md";

const AddTask = ({todos, setTodos}) => {

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item)=>{
                if(item.key === todo.key){
                    return {...item, completed: !item.completed}

                }
                return item
            })
        )
    }
       

    const deleteItemFromList = (key) => {
        const newList = todos.filter((item) => {
            return (
                item.key !== key
            )
        })
        setTodos(newList)

    }
console.log(todos.completed);
  return (
      <div>
          {todos.map((item, i) => (
              <div key={item.key}>
                  <ul key={i} className='task-div w-50 m-auto my-4'>
                      <li>
                      {

                      }
                          <div onClick={() => handleComplete(todos)} className="unchecked">

                              <MdRadioButtonUnchecked />
                      </div>
                             
                          <h5>{item.item}</h5>
                   
                          <FaTrashAlt onClick={() => deleteItemFromList(item.key)} className='trash' />
                          {/* <div className="checkbox checked">
                              <MdCheckCircle />
                          </div> */}

                      </li>
                  </ul>
              </div>
          ))}

      </div>
  )
}

export default AddTask