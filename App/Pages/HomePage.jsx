import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarks: []
        };
    }

    componentDidMount() {
        let self = this;
        chrome.bookmarks.getTree((results) => {
            self.setState({
                bookmarks: results[0].children
            });
        });
    }

    render() {
        return (
            <section>
                {
                    this.state.bookmarks.map((item, index) => {
                        return (
                            <p>
                                {item.title}
                            </p>
                        );
                    })
                }
            </section>
        );
    }
}