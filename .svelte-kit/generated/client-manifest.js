export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\lib\\Card.svelte")
];

export const dictionary = {
	"": [[0, 2], [1], 1],
	"lib/Card": [[0, 3], [1]]
};