function solution(bridge_length, weight, truck_weights) {
    const crossingTrucks = new Array(bridge_length).fill(0)
    let takenTime = 0
    const crossedTrucks = []
    
    while(truck_weights.length){
      takenTime++
      crossingTrucks.shift()
      const readyTruck = truck_weights.shift()
      if (weight >= crossingTrucks.reduce((a,b) => a+b) + readyTruck){
        crossingTrucks.push(readyTruck)
      }else{
        crossingTrucks.push(0)
        truck_weights.unshift(readyTruck)
      }
    }
    
    return takenTime + bridge_length
}