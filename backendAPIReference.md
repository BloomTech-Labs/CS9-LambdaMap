#Clients Endpoints

##Retrieve all client (GET)
###http://localhost:8000/api/clients/
__retrieves all of the current clients in the system and all of their attributes__

##Update a client (PUT)
###http://localhost:8000/api/update-client/
__Update an attribute, or attributes, of a current client__

###requires: an email of the current client - throws an error if email is not registered

example PUT request:

{
    "email":"client@maps",
    "linkedin":"linkedin updated"
}

This updates the linkedin attribute of a user

{
    "email":"client@maps",
    "linkedin":"linkedin updated"
    "about":"about updated",
}

This updates the linkedin attribute and about attribute of a user 


##Create a client (POST)
###http://localhost:8000/api/create-client/
__Create a new client__

###requires: an email of the current client - throws an error if email is already registered

example POST request:

  {
      "password":"new client",
      "email":"client@maps",
      "firstName":"first",
      "lastName":"last",
      "remote":"False",
      "relocate":"True",
      "linkedin":"linkedin",
      "github":"github",
      "twitter":"twitter",
      "codepen":"codepen",
      "portfolioPicture":"portfolioPicture",
      "city":"city",
      "state":"state",
      "personalWebsite":"personalWebsite",
      "phone":"111-111-1111",
      "about":"about"
  }

##Login a client (POST)
###http://localhost:8000/api/login-client/
__Retrieve a client's current state__
###requires: an email of the current client -and the clients current password
Example POST request:
{
    "password":"new client",
    "email":"client@maps",
}

##Delete a client (POST)
###http://localhost:8000/api/delete-client/
__Deletes a registered client
###requires: an email of the current client 
Example POST request:
{
    "email":"client@maps",
}
