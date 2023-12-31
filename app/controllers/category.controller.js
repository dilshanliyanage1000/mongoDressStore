const db = require("../models");

const Category = db.categories;

// CREATE AND STORE NEW CATEGORY

exports.create = (req, res) => {

    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const product = new Category({
        name: req.body.name
    });

    Category
        .create(product)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the product."
            });
        });
};



// RETRIEVE ALL CATEGORIES

exports.findAll = (req, res) => {

    const name = req.query.name;

    var condition = name ? {
        name: {
            $regex: new RegExp(name),
            $options: "i"
        }
    } : {};

    Category
        .find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving products."
            });
        });
};



// FIND CATEGORY BY ID

exports.findOne = (req, res) => {

    const id = req.params.id;

    Category
        .findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({
                    message: "Not found Category with id " + id
                });

            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({
                    message: "Error retrieving Category with id=" + id
                });
        });
};



// UPDATE CATEGORY BY ID

exports.update = (req, res) => {

    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Category.findByIdAndUpdate(id, req.body, {
            useFindAndModify: false
        })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Category with id=${id}. Maybe Category was not found!`
                });
            } else res.send({
                message: "Category was updated successfully."
            });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Category with id=" + id
            });
        });
};



// DELETE CATEGORY BY ID

exports.delete = (req, res) => {

    const id = req.params.id;

    Category.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Category with id=${id}. Maybe Category was not found!`
                });
            } else {
                res.send({
                    message: "Category was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not Category Product with id=" + id
            });
        });
};



// DELETE ALL CATEGORIES

exports.deleteAll = (req, res) => {

    Category.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Categories were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all categories."
            });
        });
};



// FIND ALL PUBLISHED CATEGORIES

exports.findAllPublished = (req, res) => {
    Category.find({
            published: true
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        });
};