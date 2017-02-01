var Program = require('../models/program');
 
exports.getPrograms = function(req, res, next){
 
    Program.find(function(err, programs) {
 
        if (err){
            res.send(err);
        }
 
        res.json(programs);
 
    });
 
}
 
exports.createProgram = function(req, res, next){
 
    Program.create({
        title : req.body.title,
        description: req.body.description,
        exercises: req.body.exercises

    }, function(err, program) {
 
        if (err){
            res.send(err);
        }
 
        Program.find(function(err, program) {
 
            if (err){
                res.send(err);
            }
 
            res.json(programs);
 
        });
 
    });
 
}
 
exports.deleteProgram = function(req, res, next){
 
    Program.remove({
        _id : req.params.program_id
    }, function(err, program) {
        res.json(program);
    });
 
}