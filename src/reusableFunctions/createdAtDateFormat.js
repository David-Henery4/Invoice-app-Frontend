function getCreatedAtDateFormat(initialDate = new Date()) {
  let year = initialDate.getFullYear();
  let month = (initialDate.getMonth() + 1).toString().padStart(2, "0");
  let day = initialDate.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default getCreatedAtDateFormat