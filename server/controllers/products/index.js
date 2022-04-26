const ProductoSchema = require('../../models/producto')

const getProducts = async (req, res) => {
    const products = await ProductoSchema.find()

    res.status(200).json({
        success: true,
        data: products
    })
}

const getProductById = async (req, res) => {
    const { id } = req.params
    const product = await ProductoSchema.findById(id).lean()

    res.status(200).json({
        success: true,
        data: product
    })
}

const updateProduct = async (req, res) => {
    const { id } = req.params
    const { title, price, descriptions } = req.body

    const product = await ProductoSchema.findByIdAndUpdate(id, {
        title,
        price,
        descriptions
    }, { new: true })

    res.status(200).json({
        success: true,
        data: product
    })
}

const createProduct = async (req, res) => {
    const { title, price, descriptions } = req.body

    const product = new ProductoSchema({
        title,
        price,
        descriptions
    })

    await product.save()

    res.status(200).json({
        success: true,
        data: product
    })
}

module.exports = {
    getProducts,
    getProductById,
    updateProduct,
    createProduct
}