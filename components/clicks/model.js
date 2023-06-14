const mongoose = require('mongoose')
const { Schema } = mongoose

const AddToCartSchema = new Schema({
	productId: {
		type: String,
		required: [true, 'Product Id is required']
	},
	productName: {
		type: String,
		required: [true, 'Product name is required']
	},
	value: {
		type: Number,
		required: [true, 'Product value is required']
	},
	user: {
		type: Object,
		properties: {
			email: {
				type: String,
				required: [true, 'Email of user is required']
			},
			gender: {
				type: Number,
				required: [true, 'Gender is required']
			},
			birthday: {
				type: String,
				required: [true, 'Birthday is required']
			}
		}
	},
	status: {
		type: Number,
		default: 1
	}
}, { timestamps: true, versionKey: false })

const AddToCart = mongoose.models.AddToCartSchema || mongoose.model('AddToCart', AddToCartSchema, 'AddToCarts')

module.exports = AddToCart