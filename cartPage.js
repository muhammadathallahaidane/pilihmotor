function pilihDelivery(answer) {
    if (answer.value === "dealer") {
        document.getElementById("dealer").classList.remove("displayNone")
        if (!document.getElementById("home").classList.contains("displayNone")) {
            document.getElementById("home").classList.add("displayNone")
        }
    } else if (answer.value === "home") {
        document.getElementById("home").classList.remove("displayNone")
        if (!document.getElementById("dealer").classList.contains("displayNone")) {
            document.getElementById("dealer").classList.add("displayNone")
        }
    } else {
        document.getElementById("dealer").classList.add("displayNone")
        document.getElementById("home").classList.add("displayNone")
    }
}