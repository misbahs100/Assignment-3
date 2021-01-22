
// 1. kilometerToMeter
function kilometerToMeter(kilometer){
    if(kilometer<0){
        var message = "Distance cannot be negative.";
        return message;
    }
    var meter = kilometer * 1000;  // 1 kilometer = 1000 meter
    return meter; 
}

// 2. budgetCalculator
function budgetCalculator(watch, phone, laptop){
    var total;
    if(watch < 0){
        var message = "Quantities cannot be negative.";
        return message;
    }
    else if(watch % 1 != 0){ 
        var message = "Quantities cannot be fractional.";
        return message;
    }
    else if(phone < 0){
        var message = "Quantities cannot be negative.";
        return message;
    }
    else if(phone % 1 != 0){
        var message = "Quantities cannot be fractional.";
        return message;
    }
    else if(laptop < 0){
        var message = "Quantities cannot be negative.";
        return message;
    }
    else if(laptop % 1 != 0){
        var message = "Quantities cannot be fractional.";
        return message;
    }
    else {
        var watchCost = watch * 50;
        var phoneCost = phone * 100;
        var laptopCost = laptop * 500;
        total = watchCost + phoneCost + laptopCost;
    }
    

    return total;
}

//3. hotelCost
function hotelCost(days){
    var total = 0;
    if(days == 0){
        var message = "You do not have any hotel cost.";
        return message;
    }
    else if(days < 0){
        var message = "Days cannot be negative.";
        return message;
    }
    else if(days % 1 != 0){
        var message = "Days cannot be fractional.";
        return message;
    }
    else if(days <= 10){
        total = days * 100;
    }
    else if(days <= 20){
        var first = 10 * 100;
        var remaining = days - 10;
        var second = remaining * 80;
        total = first + second;
    }
    else {
        var first = 10 * 100;
        var second = 10 * 80;
        var remaining = days - 20;
        var third = remaining * 50;
        total = first + second + third;
    }
    return total;
}

// 4. megaFriend
function megaFriend(names){
    var count = []; // this array will store the lengths of the elements of the given array.
    var max = 0; 
    var max_index = 0; // "max_index" will store the index of the element whose length is maximum.
    var type= typeof names;
    
    if(type != "object"){
        var message = "Your input is not an array.";
        return message;
    }
    if(names.length == 0){ 
        var message = "The array is empty.";
        return message;
    }
    for(var i=0; i<names.length; i++){
        var element = names[i];
        var lengthElement = element.length;
        count.push(lengthElement);
    }

    for(var i=0; i<count.length; i++){
        var element = count[i];
        if(element > max){  // even the first element of the same length will be selected too.
            max = element;
            max_index = i; // here, "i" is the index of the maximum length element.
        }
    }

    var result = names[max_index];
    return result;
}                                                   


