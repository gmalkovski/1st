function filter(input) {
    console.log([input.filter(n => Number(n) % 2 === 0)].length);
    console.log([input.filter(n => Number(n) % 2 === 1)].length);
    console.log([input.filter(n => Number(n) === 0)].length);
}

//filter([11, 2, 3, 44, 0, 99, 0, 87, 111])//
