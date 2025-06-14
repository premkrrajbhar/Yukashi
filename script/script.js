let dob = document.getElementById("dob");
let currentDate = document.getElementById("currentDate");
let calDob = document.getElementById("calDob");
let displayDob = document.getElementById("displayDob");
let clearBtn = document.getElementById("clearBtn");

calDob.addEventListener("click", () => {

    // Prevent form submission and page reload
    event.preventDefault();

    let dateOfBirth = dob.value;
    let presetDate = currentDate.value;

    // Validate inputs
    if (!dateOfBirth || !presetDate) {
        displayDob.textContent = "Please select both dates";
        displayDob.style.color = "black";
        displayDob.style.fontWeight = "bold";
        return;
    }

    let dateOB = new Date(dateOfBirth);
    let presetD = new Date(presetDate);

    // Validate date range
    if (presetD < dateOB) {
        displayDob.textContent = "Start Date must be earlier than the End date";
        displayDob.style.color = "black";
        displayDob.style.fontWeight = "bold";
        return;
    }

    // Calculate the age
    let ageYears = presetD.getFullYear() - dateOB.getFullYear();
    let ageMonths = presetD.getMonth() - dateOB.getMonth();
    let ageDays = presetD.getDate() - dateOB.getDate();

    // Validate negative months or days
    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(presetD.getFullYear(), presetD.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Display the result
    displayDob.textContent = `${ageYears} years, ${ageMonths} months and ${ageDays} days`;
});

// To reset everything
clearBtn.addEventListener("click", () => {
    if (!dob.value && !currentDate.value) {
        displayDob.textContent = "";
    } else {
        dob.value = "";
        currentDate.value = "";
        displayDob.textContent = "";
    }
});