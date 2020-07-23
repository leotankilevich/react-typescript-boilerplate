import { hot } from 'react-hot-loader/root';
import React from 'react';

export interface AppProps {
    title?: string;
}

const App: React.FC<AppProps> = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default hot(App);
