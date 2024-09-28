const submitBtn = document.getElementById("submit_btn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const datahide = document.querySelector(".middle_layer")
const temp_real_val = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal == "") {
        city_name.innerText = "plz enter the city name of before search";
        datahide.classList.add("data_hide")
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=1d536064728d671ff1fceb3755007797`;

            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            const arrData = [data];
            city_name.innerText = `${arrData[0].name} [${arrData[0].sys.country}]`;
            temp_real_val.innerText =`${ arrData[0].main.temp}°C `;
            //    temp_status.innerText=arrData[0].weather[0].main;
            const tempMood = arrData[0].weather[0].main;
            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
                temp_status.innerHTML =
                    "<i class='fa-solid fa-cloud-sun' style='color:#FDB813;'></i>"
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fa-solid fa-cloud' sssstyle='color:#FDB813;'></i>"
            } else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    "<i class='fa-solid fa-cloud-rain'></i>"
            } else {
                "<i class='fa-solid fa-cloud' style='color:#f1f2f6;'></i>"
            }

            datahide.classList.remove("data_hide");

        } catch {
            city_name.innerText = "plz enter the city name properly";
            datahide.classList.add("data_hide");
        }

    }
}

submitBtn.addEventListener("click", getInfo)


