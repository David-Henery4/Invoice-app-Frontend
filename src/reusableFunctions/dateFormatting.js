const handleDateFormatting = (due) => {
  return Intl.DateTimeFormat([navigator.language, "en-GB"], {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(due));
};

export default handleDateFormatting