const getUser = async (username) => {
    const API_Url = `testt`;
    const response = await fetch(API_Url);
    const data = response.json();
    return data;
}

const getUserInfo = (username) => {
    return new Promise((resolve, reject) => fetch(`testt`).then(response => response.json())
    .then(data => {
        if(data.message === "NOT FOUND") {
            reject("USER NOT FOUND");
        }
        else{
            resolve(data);
        }
    }).catch(err => reject(err));
    )
}
