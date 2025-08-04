export function formatDate(date){
    let day=date.getDate()
    let month=date.getMonth() +1
    let year=date.getFullYear()
    day= day>=10 ? day:'0'+day
    month= month>=10 ? month:'0'+month
    return `${day}/${month}/${year}`
}
