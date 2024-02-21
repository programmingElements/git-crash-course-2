const getAllContacts = (request, response) => {
  return response.status(200).json({ 
    message: "Got All Contacts"
  });
}
