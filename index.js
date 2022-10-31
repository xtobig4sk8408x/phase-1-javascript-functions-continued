let saturdayFun = (activity = "roller-skate") => (`This Saturday, I want to ${activity}!`);

let mondayWork = (work = "go to the office") =>(`This Monday, I will ${work}.`);

const wrapAdjective = (star = "*") => {
    function result(emphatic) {
        return `You are ${star}${emphatic}${star}!`;
    };
    debugger;
    return result;
}