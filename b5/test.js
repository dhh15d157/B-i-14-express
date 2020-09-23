obj = {
    age: "20",
    name: "Jai",
    old: "yes",
    die: "99",

}
a = Object.keys(obj);
b = Object.values(obj);
console.log(a);
console.log(b);
var b2 = b.map((item)=>{
    parseInt(item)
    if (typeof(parseInt(item)) == "number") {
        return parseInt(item);
    } else {
        return item;
    }
})
console.log(b2);