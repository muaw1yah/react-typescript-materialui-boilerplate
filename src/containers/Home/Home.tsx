import React from 'react';

export interface Props {
    children?: React.ReactNode
}

export default class Home extends React.Component<Props, any> {

    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <div className="Home">
                <h2>Hello from Home</h2>
            </div>
        )
    }
}