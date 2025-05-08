export default async function fetchData() {
	try {
		const response = await fetch("./db/db.json");
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};
