import {ADD_REMINDER, REMOVE_REMINDER, REMOVE_ALL } from "../types"
import { bake_cookie, read_cookie } from 'sfcookies'


const reminder = (state=[], action) => {
    let reminder = [];

    state = read_cookie('reminder')

    if (action.type === ADD_REMINDER ){
    reminder = [...state, {text:action.text, date:action.date, id: Math.random()}]
    bake_cookie('reminder', reminder)
    console.log('from reducer_ADD', reminder)
    return reminder


} else if (action.type === REMOVE_REMINDER ) {
    reminder = state.filter(({id}) => id !== action.id);
    bake_cookie('reminder', reminder)
    console.log('from reducer_REOMVE', reminder)
    return reminder

} else if (action.type === REMOVE_ALL ) {
    reminder = state.filter(word => word !== word); // or Simply write: reminder = []
    bake_cookie('reminder', reminder)
    console.log('from reducer_Romove_ALL', reminder)
    return reminder


} else {
    return state
}
}

export default reminder

//     reminder = state.filter(remind => remind.id !== action.id);  const result = words.filter(word => word !== word);

