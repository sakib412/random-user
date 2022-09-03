# Server link
[https://random-user-r1eb.onrender.com/](https://random-user-r1eb.onrender.com/)

# GET `/user/random` A random user

    Get a random user from the .json file


# GET `/user/all` A list of random users

    Get all the users from the .json file
    BONUS: Limit the number of users using query parameter(s)


# POST `/user/save` Save a random user

    Save a user in the .json file
    BONUS: validate the body and check if all the required properties are present in the body.

## Example Request body
```
{
    "gender": "Male",
    "name": "Najmus Sakib s",
    "contact": "01781517797",
    "address": "Joypurhat, Bangladesh",
    "photoUrl": "https://avatars.githubusercontent.com/u/54371956?v=4"
}
```


# PATCH `/user/update` Update a random user

    Update a user's information in the .json file using its id
    BONUS: validate the user id

## Example Request body
```
{
    "id": 1,
    "gender": "Male",
    "name": "Najmus Sakib Updated",
    "contact": "+8801781517797",
    "address": "Joypurhat, Bangladesh",
    "photoUrl": "https://avatars.githubusercontent.com/u/54371956?v=4"
}   
```


# PATCH `/user/bulk-update` update multiple users

    Update multiple users' information in the .json file
    Take an array of user ids and assign it to the body.
    BONUS: validate the body.

## Example request body
```
{
    "users": [
        {
            "id": 1,
            "gender": "Male",
            "name": "Najmus Sakib updated",
            "contact": "+8801781517797",
            "address": "Joypurhat, Bangladesh",
            "photoUrl": "https://avatars.githubusercontent.com/u/54371956?v=4"
        },
        {
            "id": "",
            "name": "Najmus Sakib s",
            "gender": "Male",
            "contact": "01214214243"
        }
    ]
}
```


# DELETE `/user/delete`

    Delete a user from the .json file using its id
    BONUS: validate the user id

## Example request body
```
{
    "id": "4ee25bac-2d0e-424a-a696-8749e1fda5cc"
}
```