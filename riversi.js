class piece {
    constructor(x, y) {
        this.x = x
        this.y = y
    }



}

class board {
    constructor() {
        // 8*8 place
        this.turnwhite = true
        this.hits = []
        this.whitenum = 2
        this.blacknum = 2

        for (var i = 1; i < 9; i++) {
            let last_div = document.getElementById("row " + i)

            for (var j = 1; j < 9; j++) {
                let id = i.toString() + j.toString()
                this.hits[id] = ""
                let n = document.createElement("button")
                n.innerText = " "
                n.id = id
                var img = document.createElement("img")

                n.style = "background-color: lightgreen; width: 50px; height: 50px;"

                if (i === 4 && j === 4 || i === 5 && j === 5) {
                    this.set_black(id, n)
                } else if (i === 4 && j === 5 || i === 5 && j === 4) {
                    this.set_white(id, n)
                }




                n.addEventListener("click", (event) => {
                    let rq = this.right_query(id)
                    for (var r = 0; r < rq; r++) {
                        if (this.turnwhite) {
                            this.set_white((+id + r + 1).toString, document.getElementById((+id + r + 1).toString()))
                            this.hits[(+id + r + 1).toString()] = "w"

                        } else {
                            this.set_black((+id + r + 1).toString, document.getElementById((+id + r + 1).toString()))
                            this.hits[(+id + r + 1).toString()] = "b"
                        }
                    }
                    let lq = this.left_query(id)
                    for (var r = 0; r < lq; r++) {
                        if (this.turnwhite) {
                            this.set_white((+id - r - 1).toString, document.getElementById((+id - r - 1).toString()))
                            this.hits[(+id - r - 1).toString()] = "w"

                        } else {
                            this.set_black((+id - r - 1).toString, document.getElementById((+id - r - 1).toString()))
                            this.hits[(+id - r - 1).toString()] = "b"
                        }
                    }
                    let dq = this.down_query(id)
                    for (var r = 0; r < dq; r++) {
                        if (this.turnwhite) {
                            this.set_white((+id + (r * 10) + 10).toString, document.getElementById((+id + (r * 10) + 10).toString()))
                            this.hits[(+id + (r * 10) + 10).toString()] = "w"

                        } else {
                            this.set_black((+id + (r * 10) + 10).toString, document.getElementById((+id + (r * 10) + 10).toString()))
                            this.hits[(+id + (r * 10) + 10).toString()] = "b"
                        }
                    }
                    let uq = this.up_query(id)
                    for (var r = 0; r < uq; r++) {
                        if (this.turnwhite) {
                            this.set_white((+id - (r * 10) - 10).toString, document.getElementById((+id - (r * 10) - 10).toString()))
                            this.hits[(+id - (r * 10) - 10).toString()] = "w"

                        } else {
                            this.set_black((+id - (r * 10) - 10).toString, document.getElementById((+id - (r * 10) - 10).toString()))
                            this.hits[(+id - (r * 10) - 10).toString()] = "b"
                        }
                    }
                    let urq = this.up_right_query(id)
                    for (var r = 0; r < urq; r++) {
                        let new_id = (+id - (r * 10) - 10 + 1 + r).toString()
                        if (this.turnwhite) {
                            this.set_white(new_id, document.getElementById(new_id))
                            this.hits[new_id] = "w"

                        } else {
                            this.set_black(new_id, document.getElementById(new_id))
                            this.hits[new_id] = "b"
                        }
                    }
                    let ulq = this.up_left_query(id)
                    for (var r = 0; r < ulq; r++) {
                        let new_id = (+id - (r * 10) - 10 - 1 - r).toString()
                        if (this.turnwhite) {
                            this.set_white(new_id, document.getElementById(new_id))
                            this.hits[new_id] = "w"

                        } else {
                            this.set_black(new_id, document.getElementById(new_id))
                            this.hits[new_id] = "b"
                        }
                    }
                    let drq = this.down_right_query(id)
                    for (var r = 0; r < drq; r++) {
                        let new_id = (+id + (r * 10) + 10 + 1 + r).toString()
                        if (this.turnwhite) {
                            this.set_white(new_id, document.getElementById(new_id))
                            this.hits[new_id] = "w"

                        } else {
                            this.set_black(new_id, document.getElementById(new_id))
                            this.hits[new_id] = "b"
                        }
                    }
                    let dlq = this.down_left_query(id)
                    for (var r = 0; r < dlq; r++) {
                        let new_id = (+id + (r * 10) + 10 - 1 - r).toString()
                        if (this.turnwhite) {
                            this.set_white(new_id, document.getElementById(new_id))
                            this.hits[new_id] = "w"

                        } else {
                            this.set_black(new_id, document.getElementById(new_id))
                            this.hits[new_id] = "b"
                        }
                    }





                    let white = document.getElementById("whitenum")
                    let black = document.getElementById("blacknum")

                    let sum = rq + lq + dq + uq + urq + ulq + drq + dlq
                    if (this.turnwhite && event.target.innerHTML == " " && ( sum > 0)) {
                        this.set_white(id, document.getElementById(id))
                        turnchange()
                        this.whitenum += 1 + sum
                        this.blacknum -= sum
                        white.innerText = this.whitenum.toString()
                        black.innerText = this.blacknum.toString()
                    } else if (event.target.innerHTML == " " && (sum > 0)) {
                        this.set_black(id, document.getElementById(id))
                        turnchange()
                        this.blacknum += 1 + sum
                        this.whitenum -= sum
                        white.innerText = this.whitenum.toString()
                        black.innerText = this.blacknum.toString()
                        
                    }

                })
                last_div.append(n)


            }
        }

    }

    show_board() {
        let str = ""
        for (var i = 1; i < 9; i++) {
            str += "\n _______________________________ \n|"
            for (var j = 1; j < 9; j++) {
                str += " " + this.squares[i.toString() + j.toString()] + " |"
            }
        }
        str += "\n _______________________________ "

        return str
    }

    right_query(last_id, last_q = 0) {
        let next_id = (+last_id + 1).toString();
        let next_color = this.hits[next_id]
        if (this.turnwhite) {
            var turn = "w"
        } else {
            var turn = "b"
        }
        if (next_color === turn) {
            return last_q;
        }else if (next_color == " " || next_color == undefined || next_color == "  " || next_color == ""){
            return 0
        } else if (next_color !== turn) {
            last_q += 1;
        }

        return this.right_query(next_id, last_q);
    }
    left_query(last_id, last_q = 0) {
        let next_id = (+last_id - 1).toString();
        let next_color = this.hits[next_id]
        if (this.turnwhite) {
            var turn = "w"
        } else {
            var turn = "b"
        }
        if (next_color === turn) {
            return last_q; 
        }else if (next_color == " " || next_color == undefined || next_color == "  " || next_color == ""){
            return 0
        }else{
            last_q += 1;
        }

        return this.left_query(next_id, last_q);
    }
    down_query(last_id, last_q = 0) {
        let next_id = (+last_id + 10).toString();
        let next_color = this.hits[next_id]
        if (this.turnwhite) {
            var turn = "w"
        } else {
            var turn = "b"
        }
        if (next_color === turn) {
            return last_q;
        }else if (next_color == " " || next_color == undefined || next_color == "  " || next_color == ""){
            return 0
        } else if (next_color !== turn) {
            last_q += 1;
        }

        return this.down_query(next_id, last_q);
    }
    up_query(last_id, last_q = 0) {
        let next_id = (+last_id - 10).toString();
        let next_color = this.hits[next_id]
        if (this.turnwhite) {
            var turn = "w"
        } else {
            var turn = "b"
        }
        if (next_color === turn) {
            return last_q; 
        }else if (next_color == " " || next_color == undefined || next_color == "  " || next_color == ""){
            return 0
        }else{
            last_q += 1;
        }

        return this.up_query(next_id, last_q);
    }
    up_right_query(last_id, last_q = 0) {
        let next_id = (+last_id - 10 + 1).toString();
        let next_color = this.hits[next_id]
        if (this.turnwhite) {
            var turn = "w"
        } else {
            var turn = "b"
        }
        if (next_color === turn) {
            return last_q; 
        }else if (next_color == " " || next_color == undefined || next_color == "  " || next_color == ""){
            return 0
        }else{
            last_q += 1;
        }

        return this.up_right_query(next_id, last_q);
    }
    up_left_query(last_id, last_q = 0) {
        let next_id = (+last_id - 10 - 1).toString();
        let next_color = this.hits[next_id]
        if (this.turnwhite) {
            var turn = "w"
        } else {
            var turn = "b"
        }
        if (next_color === turn) {
            return last_q; 
        }else if (next_color == " " || next_color == undefined || next_color == "  " || next_color == ""){
            return 0
        }else{
            last_q += 1;
        }

        return this.up_left_query(next_id, last_q);
    }
    down_right_query(last_id, last_q = 0) {
        let next_id = (+last_id + 10 + 1).toString();
        let next_color = this.hits[next_id]
        if (this.turnwhite) {
            var turn = "w"
        } else {
            var turn = "b"
        }
        if (next_color === turn) {
            return last_q; 
        }else if (next_color == " " || next_color == undefined || next_color == "  " || next_color == ""){
            return 0
        }else{
            last_q += 1;
        }

        return this.down_right_query(next_id, last_q);
    }
    down_left_query(last_id, last_q = 0) {
        let next_id = (+last_id + 10 - 1).toString();
        let next_color = this.hits[next_id]
        if (this.turnwhite) {
            var turn = "w"
        } else {
            var turn = "b"
        }
        if (next_color === turn) {
            return last_q; 
        }else if (next_color == " " || next_color == undefined || next_color == "  " || next_color == ""){
            return 0
        }else{
            last_q += 1;
        }

        return this.down_left_query(next_id, last_q);
    }



    set_black(id, n) {
        n.innerHTML = "<svg height=\"45\" width=\"45\" xmlns=\"http://www.w3.org/2000/svg\"><circle r=\"18\" cx=\"19\" cy=\"20\" fill=\"black\" stroke=\"lightblue\" stroke-width=\"4px\"/></svg>"
        this.hits[id] = "b"
        }

    set_white(id, n) {
        n.innerHTML = "<svg height=\"45\" width=\"45\" xmlns=\"http://www.w3.org/2000/svg\"><circle r=\"18\" cx=\"19\" cy=\"20\" fill=\"white\" stroke=\"lightblue\" stroke-width=\"4px\"/></svg>"
        this.hits[id] = "w"
    }
}







var b = new board()
function turnchange(){
    if (b.turnwhite){
        b.turnwhite = false
        let div = document.getElementById("butdiv")
        div.style = "display:inline-block; border: 5px; border-style: solid; border-color: black; outline: 2px; outline-color: brown; outline-style: solid;"
    
    }else{
        b.turnwhite = true
        let div = document.getElementById("butdiv")
        div.style = "display:inline-block; border: 5px; border-style: solid; border-color: white; outline: 2px; outline-color: brown; outline-style: solid;"
    
    }
}
//console.log(document.getElementsByTagName("button"))

