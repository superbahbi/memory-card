const mapList = (arrayToMap) => {
  let increment = 0;

  arrayToMap.map((element) => {
    
    increment += 1;
    return (
      <li key={'card' + increment}>{element}</li>
    )
  })
  return arrayToMap;
}

export default mapList;