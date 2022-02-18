const search = (data,query)=>{
  return data.filter(item=>
    item.plat.toLowerCase().includes(query) ||
    item.client.toLowerCase().includes(query) ||
    item.date.toLowerCase().includes(query) ||
    item.phoneNumber.toLowerCase().includes(query) ||
    item.vehicle.toLowerCase().includes(query) ||
    item.vehicleType.toLowerCase().includes(query)
  )
}

export default search
