function insert(){
        var req = new XMLHttpRequest();

        var name = document.getElementById("name").value;
        var reps = document.getElementById("reps").value;
        var weight = document.getElementById("weight").value;
        var date = document.getElementById("date").value;
        var lbs = document.getElementById("lbs").value;

        req.open("GET", "http://52.88.140.54:3000//insert?name=" + name + "&reps=" + reps + "&weight=" + weight + "&date=" + date + "&lbs=" + lbs, true);
        req.setRequestHeader("Content-type", "application/json");
        req.addEventListener("load", function(){
                console.log("done: ", req.status);
                        });
        req.send(null);

}

document.getElementById("addEx").addEventListener("click", insert);