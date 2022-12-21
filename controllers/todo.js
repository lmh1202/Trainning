import Todo from "../models/todo.js"

const TodoController = {}

TodoController.getAll = (req, res) =>{
    Todo.getAll(
        (err, result)=>{
            if (err){
                res.status(200).send({
                    success: false,
                    message: 'Fetch failed'
                })
            }else{
                res.status(200).send({
                    success: true,
                    data: result
                })
            }
        }
    );
}

export default TodoController