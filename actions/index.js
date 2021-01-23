import {ADD_REMINDER, REMOVE_REMINDER, REMOVE_ALL} from '../types'


export const add_Reminder = (text,date) => {
    const action = {
        type:ADD_REMINDER,
        text,
        date
    } 
    console.log('Add Action', action)
    return action
}

export const remove_Reminder = (id) => {
    const action = {
        type:REMOVE_REMINDER,
        id
    } 
    console.log('Remove Action', action)
    return action
}

export const remove_All = () => {
    const action = {
        type:REMOVE_ALL,
    } 
    console.log('Remove All Action', action)
    return action
}

