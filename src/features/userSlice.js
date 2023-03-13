import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        account: [
            {
                id: 0,
                username: '',
                email: '',
                password: ''
            }
        ],
        message: '',
        userLogin: [],
        listAccount: [],

    },
    reducers: {
        register: (state, action) => {
            let arrAccount = state.account
            let payloadAccount = action.payload.account
            let matchUsername = arrAccount.some(i => i.username === payloadAccount.uername)
            let matchEmail = arrAccount.some(i => i.email === payloadAccount.email)

            if (matchUsername) state.message = 'Username sudah terdaftar'
            else if (matchEmail) state.message = 'Email sudah terdaftar'
            else if (matchUsername && matchEmail) state.message = 'Username dan Email sudah terdaftar'
            else state.account = action.payload.account
        },
        login: (state, action) => {

            let arrLogin = state.userLogin
            if (arrLogin.length > 0) arrLogin.splice(0, 1, action.payload.userLogin)
            else arrLogin = [action.payload.userLogin, ...arrLogin]
            console.log(arrLogin)
        },
        getAccount: (state, action) => {
            console.log('redux   ', action.payload)
            state.listAccount = action.payload
        }
    }

});

export const { register } = userSlice.actions;
export const { login } = userSlice.actions;
export const { getAccount } = userSlice.actions;
export default userSlice.reducer;