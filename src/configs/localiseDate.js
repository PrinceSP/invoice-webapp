import months from './months'

const localizeDateStr = (actualDate)=>{

  let fullDate = actualDate.split('T').shift()
  let [day, month, year] = fullDate.split('-')

  return actualDate = `${day} ${months[month-1]} ${year} `;
}

export default localizeDateStr
