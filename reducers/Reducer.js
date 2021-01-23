import {ADD_REMINDER, REMOVE_REMINDER, REMOVE_ALL } from "../types"


const reminder = (state=[], action) => {
    let reminder = [];

    if (action.type === ADD_REMINDER ){
    reminder = [...state, {text:action.text, date:action.date, id: Math.random()}]
    console.log('from reducer_ADD', reminder)
    return reminder


} else if (action.type === REMOVE_REMINDER ) {
    reminder = state.filter(({id}) => id !== action.id);
    console.log('from reducer_REOMVE', reminder)
    return reminder

} else if (action.type === REMOVE_ALL ) {
    reminder = state.filter(word => word !== word); // or Simply write: reminder = []
    console.log('from reducer_Romove_ALL', reminder)
    return reminder


} else {
    return state
}
}

export default reminder

//     reminder = state.filter(remind => remind.id !== action.id);  const result = words.filter(word => word !== word);

