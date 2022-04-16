function computerPlay(){
    let options = ['Rock', 'Paper', 'Scissors'];
    console.log(options.length) // length of three (lengths do not start at 0)
    let choice = options[Math.floor(Math.random()*options.length)]; /*math.random returns number from 0 (inclusive) to 1 (exclusive)
    in this specific case, this means if its from 0 to 5, than it will return 0 , 1 ,2 ,3 , or 4 but not 5 
    therefore, our options array has an index from 0-2, but our length is 3. math.random()*options.length forces to pick a number between 0-2 as the 3 is not included (exclusive)
    math.floor() returns the result of math.random * options.length as an integer rounded to the nearest whole number
    math.floor is used to give our options an integer value, without it options is not fed an integer */
    
    console.log(choice)

}
computerPlay(); //calls computerPlay for a result 

