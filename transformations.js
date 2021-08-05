class Transformations {
    constructor() {
        this.la = new LinearAlgebra()
    }

    translate2D(vector, dx, dy) {
        let tr = new Matrix(3, 3, [1, 0, dx, 0, 1, dy, 0, 0, 1])
        tr.print()
        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(tr, c)
        r = new Vector(vector.rows, r.values.slice(0, 2))

        return r
    }

    translate3D(vector, dx, dy, dz) {
        let tr = new Matrix(4, 4, [1, 0, 0, dx, 0, 1, 0, dy, 0, 0, 1, dz, 0, 0, 0, 1])
        tr.print()

        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(tr, c)
        r = new Vector(vector.rows, r.values.slice(0, 3))

        return r
    }

    rotation2D(vector, angle) {
        let t = Math.PI * angle / 180

        let rt = new Matrix(3, 3, [Math.cos(t), -Math.sin(t), 0, Math.sin(t), Math.cos(t), 0, 0, 0, 1])
        rt.print()
        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(rt, c)
        r = new Vector(vector.rows, r.values.slice(0, 2))

        return r
    }

    rotation3Dx(vector, angle) {
        let t = Math.PI * angle / 180

        let rtx = new Matrix(4, 4, [1, 0, 0, 0, 0, Math.cos(t), -Math.sin(t), 0, 0, Math.sin(t), Math.cos(t), 0, 0, 0, 0, 1])
        rtx.print()
        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(rtx, c)
        r = new Vector(vector.rows, r.values.slice(0, 3))

        return r
    }

    rotation3Dy(vector, angle) {
        let t = Math.PI * angle / 180

        let rty = new Matrix(4, 4, [Math.cos(t), 0, Math.sin(t), 0, 0, 1, 0, 0, -Math.sin(t), 0, Math.cos(t), 0, 0, 0, 0, 1])
        rty.print()
        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(rty, c)
        r = new Vector(vector.rows, r.values.slice(0, 3))

        return r
    }

    rotation3Dz(vector, angle) {
        let t = Math.PI * angle / 180

        let rtz = new Matrix(4, 4, [Math.cos(t), -Math.sin(t), 0, 0, Math.sin(t), Math.cos(t), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
        rtz.print()
        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(rtz, c)
        r = new Vector(vector.rows, r.values.slice(0, 3))

        return r
    }

    scale2Dx(vector, value) {
        let ctx = new Matrix(3, 3, [value, 0, 0, 0, 1, 0, 0, 0, 1])
        ctx.print()
        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(ctx, c)
        r = new Vector(vector.rows, r.values.slice(0, 2))

        return r
    }

    scale2Dy(vector, value) {
        let cty = new Matrix(3, 3, [1, 0, 0, 0, value, 0, 0, 0, 1])
        cty.print()
        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(cty, c)
        r = new Vector(vector.rows, r.values.slice(0, 2))

        return r
    }

    scale3Dx(vector, value) {
        let ctx = new Matrix(4, 4, [value, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
        ctx.print()

        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(ctx, c)
        r = new Vector(vector.rows, r.values.slice(0, 3))

        return r
    }

    scale3Dy(vector, value) {
        let cty = new Matrix(4, 4, [1, 0, 0, 0, 0, value, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
        cty.print()

        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(cty, c)
        r = new Vector(vector.rows, r.values.slice(0, 3))

        return r
    }

    scale3Dz(vector, value) {
        let ctz = new Matrix(4, 4, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, value, 0, 0, 0, 0, 1])
        ctz.print()

        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(ctz, c)
        r = new Vector(vector.rows, r.values.slice(0, 3))

        return r
    }

    reflection2Dx(vector) {
        let tx = new Matrix(3, 3, [1, 0, 0, 0, -1, 0, 0, 0, 1])

        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(tx, c)
        r = new Vector(vector.rows, r.values.slice(0, 2))

        return r
    }

    reflection2Dy(vector) {
        let ty = new Matrix(3, 3, [-1, 0, 0, 0, 1, 0, 0, 0, 1])

        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(ty, c)
        r = new Vector(vector.rows, r.values.slice(0, 2))

        return r
    }

    reflection3Dx(vector) {
        let tx = new Matrix(4, 4, [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
        tx.print()

        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(tx, c)
        r = new Vector(vector.rows, r.values.slice(0, 3))

        return r
    }

    reflection3Dy(vector) {
        let ty = new Matrix(4, 4, [-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
        ty.print()

        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(ty, c)
        r = new Vector(vector.rows, r.values.slice(0, 3))

        return r
    }

    reflection3Dz(vector) {
        let tz = new Matrix(4, 4, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1])
        tz.print()

        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(tz, c)
        r = new Vector(vector.rows, r.values.slice(0, 3))

        return r
    }

    projection2Dx(vector) {
        let px = new Matrix(3, 3, [1, 0, 0, 0, 0, 0, 0, 0, 1])

        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(px, c)
        r = new Vector(vector.rows, r.values.slice(0, 2))

        return r
    }

    projection2Dy(vector) {
        let py = new Matrix(3, 3, [0, 0, 0, 0, 1, 0, 0, 0, 1])

        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(py, c)
        r = new Vector(vector.rows, r.values.slice(0, 2))

        return r
    }

    projection3Dx(vector) {
        let px = new Matrix(4, 4, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
        px.print()

        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(px, c)
        r = new Vector(vector.rows, r.values.slice(0, 3))

        return r
    }

    projection3Dy(vector) {
        let py = new Matrix(4, 4, [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
        py.print()

        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(py, c)
        r = new Vector(vector.rows, r.values.slice(0, 3))

        return r
    }

    projection3Dz(vector) {
        let pz = new Matrix(4, 4, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
        pz.print()

        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(pz, c)
        r = new Vector(vector.rows, r.values.slice(0, 3))

        return r
    }

    shearing2Dx(vector, value) {
        let csx = new Matrix(3, 3, [1, value, 0, 0, 1, 0, 0, 0, 1])

        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(csx, c)
        r = new Vector(vector.rows, r.values.slice(0, 2))

        return r
    }

    shearing2Dy(vector, value) {
        let csy = new Matrix(3, 3, [1, 0, 0, value, 1, 0, 0, 0, 1])

        let aux = vector.values.slice()
        aux.push(1)

        let c = new Vector(vector.size + 1, aux)

        let r = this.la.dot(csy, c)
        r = new Vector(vector.rows, r.values.slice(0, 2))

        return r
    }
}