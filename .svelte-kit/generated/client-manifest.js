export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\admin\\index.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\lib\\Card.svelte"),
	() => import("..\\..\\src\\routes\\lib\\Footer.svelte")
];

export const dictionary = {
	"": [[0, 3], [1], 1],
	"admin": [[0, 2], [1]],
	"lib/Card": [[0, 4], [1]],
	"lib/Footer": [[0, 5], [1]]
};