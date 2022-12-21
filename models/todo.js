import { db } from "../database/index.js"
const Todo = {}

Todo.getAll = (cb)=>{
    db.query('select * from todo ', cb)
}

Todo.create = ()=>{

}

export default Todo;