import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
     {
          name: {
               type: String,
               require: true,
          },
          rating: {
               type: Number,
               require: true,
          },
          comment: {
               type: String,
               require: true,
          },
     },
     {
          timestamps: true,
     }
)

const productSchena = mongoose.Schema(
     {
          user: {
               type: mongoose.Schema.Types.ObjectId,
               require: true,
               ref: 'User',
          },
          name: {
               type: String,
               required: true,
          },
          image: {
               type: String,
               required: true,
          },
          brand: {
               type: String,
               required: true,
          },
          category: {
               type: String,
               required: true,
          },
          description: {
               type: String,
               required: true,
          },
          rewiews: [reviewSchema],
          rating: {
               type: Number,
               required: true,
               default: 0,
          },
          numReviews: {
               type: Number,
               required: true,
               default: 0,
          },
          price: {
               type: Number,
               required: true,
               default: 0,
          },
          countInStock: {
               type: Number,
               required: true,
               default: 0,
          },
     },
     {
          timestamps: true,
     }
)

const Product = mongoose.model('Product', productSchena)

export default Product
