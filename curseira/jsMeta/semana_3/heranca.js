let bird = {
    hasWings: true,
    canfly: true,
    hasFeathers: true
};

console.log("***********")

let eagle1 = Object.create(bird);
console.log("eagle1: ", eagle1);
console.log("eagle1 has wings", eagle1.hasWings);
console.log("eagle1 can fly", eagle1.canfly);
console.log("eagle1 has feathers", eagle1.hasFeathers);

console.log("***********")

let eagle2 = Object.create(bird);
console.log("eagle2 has wings", eagle2.hasWings);

console.log("***********")

let penguin1 = Object.create(bird);
penguin1.canfly = false;
console.log("penguin1: ", penguin1)
console.log("penguin1 has featthers:", penguin1)
console.log("penguin1 can fly", penguin1.canfly)