const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

describe('POST /todos', function() {
    it('should create a new todo', function(done) {

        let text = 'moon';
        request(app)
            .get('/todos')
            .send({text})
            .expect(200)
            .expect((res)=>{
                expect(res.body.text).toBe(text);
            })
            .end(function(err, res) {
                if (err) return done(err);
                Todo.find().then((todos)=>{
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text)
                    done()
                }).catch((err)=> done(err))
            });

    });
});