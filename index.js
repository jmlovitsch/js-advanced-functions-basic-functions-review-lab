const Calculator = {
    add: function(a, b) {return a + b},
    subtract: function(a, b) {return a - b},
    multiply: function(a, b) {return a * b},
    divide: function(a, b) {return a / b},

}


function saturdayFun(argument = 'roller-skate') {
    return `This Saturday, I want to ${argument}!`
}


function mondayWork(argument = 'go to the office') {
    return `This Monday, I will ${argument}.`
}


let actionApplyer = function(start, ray) {
    let a = start

    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }

    return a
  }


  wrapAdjective = (style="*") => {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }
