// to do : calcualte answer


function get_input(){
    return prompt("please enter your expresseion")
}

function give_output(expresseion, answer){
    console.log("the answer of \n" + expresseion + "\nis : \n" + answer)
}


function to_arr(input_str){
    operators_str = ["+"]
    operators_index = []
    for (var i = 0; i < input_str.length; i++){
        for (var j = 0; j < operators_str.length; j++){
            if (operators_str[j] == input_str[i]){
                operators_index.push(i)
            }
        }
    }
    console.log(input_str.length)
    console.log(operators_index)
    input_list = [input_str.slice(0, operators_index[0])]
    
    for (var i = 0; i < operators_index.length; i++){
        
        input_list.push("+")
        
        input_list.push(input_str.slice(operators_index[i]+1, operators_index[i+1]))
        

    }
    console.log(operators_index)
    return input_list
}

exp = get_input()
ans = to_arr(exp)
give_output(exp, ans)

