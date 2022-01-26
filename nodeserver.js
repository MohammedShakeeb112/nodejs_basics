// console.log('Hello World!');

const square = {
    area : a => a*a,
    perimeter: a => 4*a
};

const calsq = a => {
    console.log(`the area of ${a}: ${square.area(a)}`);
    console.log(`the perimeter of ${a}: ${square.perimeter(a)}`);
};

calsq(1);
calsq(12);
calsq(10);