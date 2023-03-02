const axios = require(`axios`);

const extendedWheather = (extended, weather) => {
  let acum = 6;
  for (let i = 1; i < 5; i++) {
    weather[i] = {
      date: new Date(extended.data.list[acum].dt_txt).toDateString(),
      description: extended.data.list[acum].weather.description,
      temp: Math.floor(extended.data.list[acum].main.temp) + `°`,
      min: Math.floor(extended.data.list[acum].main.temp_min) + `°`,
      max: Math.floor(extended.data.list[acum].main.temp_max) + `°`,
      fellsLike: Math.floor(extended.data.list[acum].main.feels_like) + `°`,
      humidity: extended.data.list[acum].main.humidity + `%`,
      wind: Math.floor(extended.data.list[acum].wind.speed) + ` mts/seg`,
      img: extended.data.list[acum].weather[0].icon,
    };
    acum = acum + 8;
  }
};

const getWeather = async (req, res) => {
  let { city } = req.params;
  let apiKey = `4ae2636d8dfbdc3044bede63951a019b`;
  try {
    let today = await axios(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`
    );
    let extended = await axios(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=es`
    );
    let weather = {
      0: {
        id: today.data.id,
        date: new Date(Date.now()).toDateString(),
        country: today.data.sys.country,
        city: today.data.name,
        description: today.data.weather[0].description,
        temp: Math.floor(today.data.main.temp) + `°`,
        min: Math.floor(today.data.main.temp_min) + `°`,
        max: Math.floor(today.data.main.temp_max) + `°`,
        fellsLike: Math.floor(today.data.main.feels_like) + `°`,
        humidity: today.data.main.humidity + `%`,
        wind: Math.floor(today.data.wind.speed) + ` mts/seg`,
        img: today.data.weather[0].icon,
      },
    };
    extendedWheather(extended, weather);
    res.send(weather);
  } catch (err) {
    res.send(`City not found` + err.message);
  }
};

module.exports = { getWeather };
