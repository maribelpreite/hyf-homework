const userInfo = {
    name: undefined,
    todo: [],
}; 

function getReply (command) {
    const lowCaseCommand = command.toLowerCase();

    // greeting
    if (lowCaseCommand.includes("my name is")) {
        const firstName = command.split("is ")[1];
        const reply = (userInfo.name === firstName) ? `Hi again, ${firstName}!` : `Nice to meet you ${firstName}!`;

        userInfo.name = firstName;
        return reply;
    }

    // answering name
    if (lowCaseCommand.includes("what") && lowCaseCommand.includes("my name")) {
        const reply =  (userInfo.name !== undefined) ? `Your name is ${userInfo.name}.` : `I'm sorry, I don't know your name.`;
        return reply;
    }

    // identify the task
    function taskIdentifier (lowCaseCommand) {
        const arraySentence = lowCaseCommand.split(" ");
        const wordsToRemove = ["add", "to", "my", "todo", "list", "remove", "from", "do"]
        const filteredWords = arraySentence.filter(word => !wordsToRemove.includes(word))
        const task = filteredWords.join(" ")
        return task;
    }

    // adding to todo list
    if (lowCaseCommand.includes("add") && lowCaseCommand.includes("todo")) {
        const task = taskIdentifier(lowCaseCommand);

        const reply =  userInfo.todo.includes(task) ? `Couldn't add ${task} because it already exists in your todo list.` : `Successful addition of ${task} to your todo list.`;

        if (!userInfo.todo.includes(task)) {
            userInfo.todo.push(task);
        }

        return reply;
    }

    // remove from todolist
    if ((lowCaseCommand.includes("remove") && lowCaseCommand.includes("todo"))) {
        const task = taskIdentifier(lowCaseCommand);

        const reply =  userInfo.todo.includes(task) ? `Successful removal of ${task} from your todo list.` : `Couldn't remove ${task} because it doesn't exist in your todo list yet.`;

        if (userInfo.todo.includes(task)) {
            const itemToRemoveIndex = userInfo.todo.indexOf(task);
            userInfo.todo.splice(itemToRemoveIndex);
        }

        return reply;
    }

    // show todolist
    if ((lowCaseCommand.includes("what") && lowCaseCommand.includes("in") && lowCaseCommand.includes("todo"))) {
        return userInfo.todo;
    }

    // today's date
    if (lowCaseCommand.includes("what day") && lowCaseCommand.includes("today")) {
        const today = new Date()

        const day = today.getDate();
        const month = today.toLocaleString('default', {month: 'long'}); //this one was tough
        const year = today.getFullYear();

        return `Today is ${day} of ${month}, ${year}`;
        
    }

    //generic functions to find a number and operator within a string for the following 2 features
    function includesNumber(lowCaseCommand) {
        const regex = /\d/;
        return regex.test(lowCaseCommand);
    }

    function includesMathOperator(lowCaseCommand) {
        const regex = /[+\-*/%]|\d+/g;
        return regex.test(lowCaseCommand);
    }

    function extractMathExpression(lowCaseCommand) {
        const regex = /[+\-*/%]|\d+/g;
        return lowCaseCommand.match(regex).join("");
    }

    function extractNumber(lowCaseCommand) {
        const regex = /\d+/;
        return lowCaseCommand.match(regex);
    }

    //do simple math operations
    if (includesNumber(lowCaseCommand) && includesMathOperator(lowCaseCommand) && !lowCaseCommand.includes("timer")) {
        const mathOperationString = extractMathExpression(lowCaseCommand);
        const mathOperationNumber = eval(mathOperationString);
        return mathOperationNumber;
    } 

    //timer
    if (lowCaseCommand.includes("set") && lowCaseCommand.includes("timer") && includesNumber(lowCaseCommand)) {
        let timeValue = parseInt(extractNumber(lowCaseCommand)[0]);
        let timeExpression = "seconds"
        let timeInterval = 1000;
        
        // changing the timer function depending on minutes or seconds
        if (lowCaseCommand.includes("minute") || lowCaseCommand.includes("minutes")) {
            timeExpression = timeValue > 1 ? 'minutes' : 'minute';
            timeInterval *= 60;
        } 

        function countdown(time, interval) {
            function displayTime() {
                //console.log(time);
                time--;
                
        
                if (time < 0) {
                    console.log("Time's up!");
                    clearInterval(timerId);
                }
                
            }
            const timerId = setInterval(displayTime, interval);
        } 
        countdown(timeValue, timeInterval);
        return `Timer set to ${timeValue} ${timeExpression}`;
    } 
    
    return "Command not recognized"
    
}


const messages = [
    "Hello my name is Benjamin",
    "Hello my name is Maribel",
    "Hello my name is Maribel",
    "What is my name?",
    "What's my name?",
    "Add fishing to my todo",
    "Add singing in the shower to my todo",
    "Remove singing in the shower from my todo",
    "Add doing the laundry to my todo",
    "What's in my todo list?",
    "What day is it today?",
    "What is 3 + 3",
    "What is 5 + 3?",
    "Calculate 12 / 4",
    "How much is 6 * 7?",
    "Find the result of 10 % 3",
    "Set a timer for 10 seconds",
    //"Set a timer for 1 minute",
]

messages.forEach(message => {
    console.log(getReply(message));
})
