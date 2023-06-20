module.exports = (mongoose) => {

    var productSchema = mongoose.Schema({
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
        },
        published: {
            type: Boolean,
        },
        category: {
            type: String,
        }
    });

    productSchema.method("toJSON", function () {

        const {
            __v,
            _id,
            ...object
        } = this.toObject();

        object.id = _id;

        return object;

    });

    const Products = mongoose.model("products", productSchema);

    return Products;
};