  const percentOfState = (name, personality) => {
    return (states[name][personality]['A'] + states[name][personality]['T']) / 100
  }

  const getMax = (personality) => {
    let max = 0;
    for(var name in states) {
      let temp = percentOfState(name, personality)
      if(temp > max) {
        max = temp
      }
    }
    return max
  }

  const getMin = (personality) => {
    let min = 10000;
    for(var name in states) {
      let temp = percentOfState(name, personality)
      if(temp < min) {
        min = temp
      }
    }
    return min
  }