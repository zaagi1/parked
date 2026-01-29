let parkingData = [];
let parked = 0;
let left = 0;

document.getElementById("addBtn").addEventListener("click", addParking);

function addParking() {
    let carNumber = document.getElementById("carNumber").value.trim();
    let status = document.getElementById("slotStatus").value;
    let error = document.getElementById("error");

    if (carNumber === "" || status === "") {
        error.textContent = "Please fill all fields";
        return;
    }

    error.textContent = "";

    parkingData.push({
        car: carNumber,
        status: status
    });

    if (status === "Parked") {
        parked++;
    } else {
        left++;
    }

    displayParking();

    document.getElementById("carNumber").value = "";
    document.getElementById("slotStatus").value = "";
}

function displayParking() {
    let list = document.getElementById("slotList");
    list.innerHTML = "";

    parkingData.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = (index + 1) + ". " + item.car + " - " + item.status;
        list.appendChild(li);
    });

    document.getElementById("parkedCount").textContent = parked;
    document.getElementById("leftCount").textContent = left;
}