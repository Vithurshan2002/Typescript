function display<T> (x:T):T{
    return x;
}

console.log(display<number>(10));
console.log(display<string>("kavi"))