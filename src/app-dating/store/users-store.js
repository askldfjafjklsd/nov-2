import { renderSection } from "../presentation/render-table/render-table";
import { loadUsers } from "../use-cases/load-users"

const state = {

    users: [],
}

const loadPage = async () => {
    const users = await loadUsers()
    state.users = users;
}

const onUserChangedFavorite = async (id) => {
    const users = state.users;
    users.map(user => {
        if (user.fullId === id) {
            
            user.isFavorite = !user.isFavorite;
        }
        users;
    })
}
const filterFavorites =  () => {
    const users = state.users;
    users.map(user => {
        const usersIsFavorites = user => user.isFavorite == true;
        const newUsers = users.filter(usersIsFavorites);
        newUsers;
    })
    users = newUsers;
    
}
const filterM = async () => {
    const users = state.users;
    users.map(user => {
        if (user.gender === 'male') {
            document.querySelector(`[data-id-div="${user.fullId}]`)?.remove();
        }
        users;
    })
}
const filterF = async () => {
    
    state.users = state.users.map(user => {
        if (user.gender === 'female') {
            return user;
        }
        return state.users;
    })
}

const deleteUser = async (id) => {
    
    const users = state.users;

    const index = users.findIndex((user)=>{
        return user.fullId == id;
    })
    users.splice(index, 1);
    
      
}

export default {
    filterM,
    filterF,
    filterFavorites,
    loadPage,
    onUserChangedFavorite,
    deleteUser,
    getUsers: () => [...state.users],
}
