import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0,
    },
    reducers:{
        increment:(store)=>{
            store.value+= 1
        },
        decrement:(store)=>{
            store.value-= 1
        },
        reset:(store)=>{
            store.value = 0
        },
        incrementByAmount:(store, action)=>{
            store.value += action.payload
        }
    }
})

export const {increment,decrement,reset,incrementByAmount} = counterSlice.actions

export default counterSlice.reducer