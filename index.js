// Add your code here
function submitData(userName, userEmail){
    const user = {
        name: userName,
        email: userEmail,
    };

    const configurationObject = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(user),
    };

    return fetch('http://localhost:3000/users', configurationObject)
    .then(res => res.json())
    .then(data => addToDom(data))
    .catch(error => addErrorToDom(error))
}

function addToDom(user){
    console.log(user)
    const id = document.createElement('h1');
    id.textContent = user.id;
    document.body.append(id);
}

function addErrorToDom(error){
    const errorMessage = document.createElement('h2');
    errorMessage.textContent = error.message;
    document.body.append(errorMessage);
}