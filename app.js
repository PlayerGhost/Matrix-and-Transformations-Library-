let la = new LinearAlgebra()
let transform = new Transformations()

//let a = new Matrix(3, 3, [1, 2, 3, 2, 5, 3, 1, 0, 8])
//la.inverse(a).print()

let a = new Vector(2, [3, 2])
let b = new Vector(3, [3, 2, 2])
let c = new Vector(2, [5, 0])

/*console.log(transform.reflection2Dx(a))
console.log(transform.reflection2Dy(a))
console.log(transform.reflection3Dx(b))
console.log(transform.reflection3Dy(b))
console.log(transform.reflection3Dz(b)) */

/*console.log(transform.rotation2D(c, 86.516627065))
console.log(transform.rotation3Dx(b, 30))
console.log(transform.rotation3Dy(b, 30))
console.log(transform.rotation3Dz(b, 30)) */


c.print()
b.print()
    /*console.log(transform.scale2Dx(c, 0.1))
    console.log(transform.scale2Dy(c, 0.1))
    console.log(transform.scale3Dx(b, 2))
    console.log(transform.scale3Dy(b, 2))
    console.log(transform.scale3Dz(b, 2)) */

console.log(transform.translate2D(c, 2, 2))
console.log(transform.translate3D(b, 2, 2, 2))