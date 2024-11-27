import { localUserToModel } from "../mappers/localhost-user.mapper";


export const loadUsers = async (page) => {
    const url = `https://randomuser.me/api/?results=15`
    const res = await fetch(url)
    const data = await res.json();

    const users = data.results.map(localUserToModel)


    return users;

}

//https://randomuser.me/api/?results=15