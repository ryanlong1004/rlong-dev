/**
 * Adds leading zero to a single digit value if needed.
 * @param {number} value - The value to pad.
 * @returns {string} The padded value.
 */
export const pad = (value) => {
    return ('0' + value).slice(-2);
}

/**
 * Computes the current date and time formatted as MM/DD/YYYY HH:MM:SS.
 * @returns {string} The formatted current date and time.
 */
export const current_time = (() => {
    // Get the current date and time
    const currentdate = new Date();

    // Format the date as MM/DD/YYYY
    const date = `${pad(currentdate.getMonth() + 1)}/${pad(currentdate.getDate())}/${currentdate.getFullYear()}`

    // Format the time as HH:MM:SS
    const time = `${pad(currentdate.getHours())}:${pad(currentdate.getMinutes())}:${pad(currentdate.getSeconds())}`

    // Combine the formatted date and time and return
    return `${date} ${time}`;
});