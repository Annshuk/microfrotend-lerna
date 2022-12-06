export const convertDateToIso = (dateInput) =>{
	const date = new Date(dateInput);
	return date.toISOString();
};

export const convertIsoDateToLocal = (isoDateInput) =>{
	const d = new Date(isoDateInput);	
	return `${d.toLocaleDateString().split("/").reverse().join("-")} ${d.toLocaleTimeString()}`;	
};