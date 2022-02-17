import months from './months'

const localizeDateStr = (actualDate)=>{
  // let convert = new Date(Date.parse(actualDate))

  let fullDate = actualDate.split('T').shift()
  let [day, month, year] = fullDate.split('-')

  console.log(actualDate);

  return actualDate = `${day} ${months[month-1]} ${year}`;
}

export default localizeDateStr
