// @ts-ignore
import assert from 'node:assert';
import { URLPattern } from 'urlpattern-polyfill';
import { kalye } from './index.js';

const routes = [
    {
        pattern: new URLPattern({ pathname: '/alice' }),
        render: () => 'alice'
    },
    {
        pattern: new URLPattern({ pathname: '/bob' }),
        render: () => 'bob'
    }
];

assert(kalye('https://example.com/alice', routes) === 'alice');
assert(kalye('https://example.com/charles', routes, () => 'charles') === 'charles')