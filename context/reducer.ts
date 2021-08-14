export const reducer = ( state, action) => {
    console.log(`state, action`, state, action)
    const { type, key, value } = action;
    switch(type) {
        case 'UPDATE':
            state[key] = value;
            return state;
        default:
            console.log('no action');
            return state;
    }
}