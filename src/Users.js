import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initUsersSync, stopInitUsersSync } from './state/users'

class Users extends Component {

    componentDidMount() {
        this.props.initUsersSync()
    }

    componentWillUnmount() {
        this.props.stopInitUsersSync()
    }

    render() {
        return (
            <div>
                {
                    this.props.users === null ?
                        'Ładowanie userów...'
                        :
                        Object.entries(this.props.users)
                            .map(([key, value]) => ({
                                ...value,
                                key
                            }))
                            .map(user => (
                                <div
                                    key={user.key}
                                >
                                    {user.name}
                                </div>
                            ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.users
})

const mapDispatchToProps = dispatch => ({
    initUsersSync: () => dispatch(initUsersSync()),
    stopInitUsersSync: () => dispatch(stopInitUsersSync())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)