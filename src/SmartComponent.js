import React from 'react'
import { connect } from 'react-redux'
import { inputAction, displeyText } from './state/smartComponent'


const SmartComponent = (props) => (
    <div>
        <div>
            <p> {props.displayedText}</p>
            <input
                type={'text'}
                placeholder={'Wpisz tekst'}
                onChange={props.onChangeHandler}
                value={props.inputText}
            />
            <button
                onClick={props.onClickHandler}
            >Pokaż tekst</button>
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    displayedText: state.smartComponent.displayedText,
    inputText: state.smartComponent.inputText
})

const mapDispatchToProps = dispatch => ({
    onChangeHandler: (event) => dispatch(inputAction(event.target.value)),
    onClickHandler: () => dispatch(displeyText())

})

export default connect(
    mapStateToProps, mapDispatchToProps
)(SmartComponent)