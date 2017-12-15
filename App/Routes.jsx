import React from 'react';
import {
    HashRouter,
    Route
} from 'react-router-dom';

import HomePage from './Pages/HomePage';

class MainView extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default (
    <HashRouter>
        <MainView>
            <Route path="/homePage" component={HomePage} />
        </MainView>
    </HashRouter>
);