const getAllContacts = (request, response) => {
  return response.status(200).json({ 
    message: "Got All Contacts"
  });
}

const getMyContact = (request, response) => {
  return response.status(200).json({ 
    message: "Got My Contact"
  });
}

const addContact = (request, response) => {
  return response.status(200).json({
    message: "Contact Added Successfully"
  })
}
