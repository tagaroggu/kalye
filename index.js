/// <reference types="urlpattern-polyfill" />
import { noChange } from 'lit-html';

/**
 * @template T
 * @param {string} currentRoute
 * @param {{ pattern: URLPattern, render: (arg0: URLPatternResult) => T }[]} routes
 * @param {((arg0: string) => T) | undefined} fallback
 */
export const kalye = (currentRoute, routes, fallback = undefined) => {
    let maybeMatch = routes.find((route) => route.pattern.test(currentRoute));
    if (maybeMatch) {
        // @ts-ignore
        return maybeMatch.render(maybeMatch.pattern.exec(currentRoute));
    } else if (fallback) {
        return fallback(currentRoute);
    } else {
        throw new Error(`No matching route found for '${currentRoute}'. No fallback route in place either. Throwing error.`)
    }
};