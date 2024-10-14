// src/routes/about/+page.js

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		pageData: {
			vision: "To revolutionize public communication through innovative, space-grade technologies.",
			mission: "Developing the Starphone to provide secure and reliable communication in the most extreme environments on Earth and in space."
		}
	};
}
