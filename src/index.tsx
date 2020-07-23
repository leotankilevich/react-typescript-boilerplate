import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

ReactDOM.render(<App title="It's React + TS Project" />, document.getElementById('app'));

type Tree<T> = T & {
    left?: Tree<T>;
    right?: Tree<T>;
};

interface IValue {
    value: number;
}

const tree = {
    left: {
        left: {
            left: {
                right: {
                    left: {
                        value: 7,
                    },
                    right: {
                        value: 14,
                    },
                    value: 66,
                },
                value: 23,
            },
            value: 90,
        },
        right: {
            value: 67,
        },
        value: 34,
    },
    right: {
        value: 11,
    },
    value: 16,
};

function treeValueSumm(value: Tree<IValue>): number {
    function f(): any {
        let sum = 0;

        if (value.value) {
            sum += value.value;
        }

        if (value.left) {
            sum += treeValueSumm(value.left);
        }

        if (value.right) {
            sum += treeValueSumm(value.right);
        }

        return sum;
    }

    return f();
}

console.log(treeValueSumm(tree));
console.log(treeValueSumm(tree) === 328);
