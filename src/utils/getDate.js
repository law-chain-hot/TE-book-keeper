const getDate = () => {
    const date = new Date()
    const dd = date.getDate();
    const mm = date.getMonth();
    const y = date.getFullYear();
    return `${mm}/${dd}/${y}`
}

export default getDate
