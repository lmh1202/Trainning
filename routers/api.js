import { Router } from 'express'
import TodoController from '../controllers/todo.js';
import { db } from '../database/index.js';

const ApiRouter = Router();

ApiRouter.get('/todo', function (req, res) {
    db.query("select * from todo", (err, result) => {
        if (err) {
            res.status(200).send({
                success: false,
                message: 'Fetch failed'
            })
        } else {
            res.status(200).send({
                success: true,
                data: result
            })
        }
    })
})

ApiRouter.post('/todo', function (req, res) {
    const todo = req.body;
    db.query("insert into todo set ?", todo, function (err) {
        if (err) {
            return res.status(200).send({ success: false, message: "Error" });
        }
        return res.status(200).send({ success: true, data: todo })
    })

})

ApiRouter.post('/todo/delete', function (req, res) {
    const test = req.body.uuid;
    db.query("delete from todo where uuid = ?", test, function (err) {
        if (err) {
            return res.status(200).send({ success: false, message: "Error" })
        }
        return res.status(200).send({ success: true, message: test })
    })
    //return res.status(200).send({ success: true, message: test })
})

ApiRouter.post('/todo/update', function (req, res) {
    try {
        const valueUpdate = req.body

        let queries = ''

        for (let i = 0; i < valueUpdate.length; i++) {
            let uuid = valueUpdate[i].uuid
            let status = valueUpdate[i].status
            queries += db.format("update todo set status = ? where uuid = ?; ", [status, uuid])
        }
        console.log(queries)

        db.query(queries, function (err) {
            if (err) {
                console.log(err)
                return res.status(200).send({
                    success: false,
                    message: "Not value"
                })
            }
            return res.status(200).send({
                success: true,
                message: queries
            })
        })
    } catch (error) {
        res.status(200).send({
            success: false,
            message: error.message
        })
    }

})

export default ApiRouter;
