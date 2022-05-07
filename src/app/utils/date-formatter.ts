/**
 * Formats given date and returns the formatted date
 *
 * @param date Date
 * @returns String
 */
export function dateFormatter(date: Date | null): string {
  try {

    if (!date) {
      date = new Date();
    }

    const dateFormat: string = 'YYYY-MM-DD';
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    let formattedDate = '';

    // Year
    formattedDate = dateFormat.replace('YYYY', `${year}`);

    // Month
    if (month < 10) {
      formattedDate = formattedDate.replace('MM', `0${month}`);
    } else {
      formattedDate = formattedDate.replace('MM', `${month}`);
    }

    // Day
    if (day < 10) {
      formattedDate = formattedDate.replace('DD', `0${day}`);
    } else {
      formattedDate = formattedDate.replace('DD', `${day}`);
    }

    return formattedDate;

  } catch (error) {

    return '';
  }
}
