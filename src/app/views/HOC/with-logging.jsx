import React, {Component} from "react";

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent';
}

function withLogging(WrappedComponent) {

    const displayName = getDisplayName(WrappedComponent)

    const consoleLog = (msg, obj) => {
        console.log(`${displayName} ${msg}`, obj)
    }

    class WithLogging extends Component {
        render() {
            return (
                <WrappedComponent consoleLog={consoleLog} {...this.props}/>
            )
        }
    }

    WithLogging.displayName = `withLogging(${displayName})`
    return WithLogging
}

export default withLogging