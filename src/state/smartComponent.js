
const INPUT = 'smartComponent/INPUT'
const DISPLAY_TEKST = 'smartComponent/DISPLAY_TEKST'




export const inputAction = (value) => (
    {
        type: INPUT,
        value
    }
)

export const displeyText = () => (
    {
        type: DISPLAY_TEKST
    }
)

const iniatialState = {
    inputText: '',
    displayedText: ''
}



export default (state = iniatialState, action) => {
    switch (action.type) {
        case INPUT:
            return {
                ...state,
                inputText: action.value
            }
        case DISPLAY_TEKST:
            return {
                ...state,
                displayedText: state.inputText
            }
        default:
            return state
    }

}