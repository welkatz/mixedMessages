const mixedMessages = () => {
    const weather = ["gloomy", "sunny", "cloudy", "stormy", "crazy", "hazy", "foggy", "rainy", "overcast", "chilly"];
    const suggestion = ["a swim", "a hike", "a picknick", "a ride", "a run", "a walk in the park", "some gardening", "visit to the zoo", "a movie", "a beer"];
    let messWeather = weather[Math.floor(Math.random() * 10)];
    let messSuggestion = suggestion[Math.floor(Math.random() * 10)];
    console.log("Today the weather is " + messWeather + ". You should go out for " + messSuggestion + ".");
}

mixedMessages();

