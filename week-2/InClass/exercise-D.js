function howru(mood) {
    if (mood == "happy") {


        return "Good job, you are doing great!"
    }
    else {
        if (mood == "sad") {
            return "every cloud has a silver liner"
        }
        else {
            if (typeof mood === "number") {
                return "beep beep boop"
            }
            else {
                return "I'm sorry, I'm still learning about feelings!"
            }

        }
    }
}

        console.log(howru(1));