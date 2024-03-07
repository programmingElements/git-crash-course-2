const createCategory = (request, response) => {
  return response.status(201).json({
    message: "Category Created Successfully"
  })
}

const getAllCategories = (request, response) => {
  return response.status(200).json({
    message: "Got All Categories"
  })
}

const getCategory = (request, response) => {
  return response.status(200).json({
     message: "Got Category"
  })
}


const updateCategory = (request, response) => {
  return response.status(200).json({
    message: "Updated Category"
  })
}
  
const deleteCategory = (request, response) => {
  return response.status(200).json({
    message: "Category Deleted"
  })
}