export function handleMonthNumberToName(month, lang) {
  switch (month) {
    case 1:
      return lang === "en" ? "January" : "Janeiro";
    case 2:
      return lang === "en" ? "February" : "Fevereiro";
    case 3:
      return lang === "en" ? "March" : "Março";
    case 4:
      return lang === "en" ? "April" : "Abril";
    case 5:
      return lang === "en" ? "May" : "Maio";
    case 6:
      return lang === "en" ? "June" : "Junho";
    case 7:
      return lang === "en" ? "July" : "Julho";
    case 8:
      return lang === "en" ? "August" : "Agosto";
    case 9:
      return lang === "en" ? "September" : "Setembro";
    case 10:
      return lang === "en" ? "October" : "Outubro";
    case 11:
      return lang === "en" ? "November" : "Novembro";
    case 12:
      return lang === "en" ? "December" : "Dezembro";
    default:
      return "";
  }
}
