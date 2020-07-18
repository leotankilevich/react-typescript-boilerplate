import { hot } from 'react-hot-loader/root';
import React from 'react';

export interface AppProps {
    title?: string;
}

interface ITestProps {
    foo: string;
    onClick: () => void;
}

class Test extends React.PureComponent<ITestProps> {
    render() {
        console.log('render');
        return <div>test</div>;
    }
}

const App: React.FC<AppProps> = ({ title }) => {
    const clickHandler = React.useCallback(() => {
        console.log('click');
    }, []);

    return (
        <div>
            <h1>{title}</h1>
            <Test foo="bar" onClick={clickHandler} />
        </div>
    );
};

export default hot(App);
