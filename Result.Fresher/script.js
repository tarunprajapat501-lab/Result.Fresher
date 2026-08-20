// Temporary student data
// Baad me isi ko Firebase database se connect karenge.

let students = {

    "230101": {
        name: "Rahul Sharma",
        enrollment: "230101",
        semester: "3",
        DBMS: 85,
        DS: 78,
        DF: 82,
        PCE: 88
    },

    "230102": {
        name: "Amit Patel",
        enrollment: "230102",
        semester: "3",
        DBMS: 72,
        DS: 80,
        DF: 75,
        PCE: 81
    }

};


// Search Result

function searchResult() {

    let enrollment =
        document.getElementById("enrollmentInput").value.trim();

    let message =
        document.getElementById("message");

    let resultSection =
        document.getElementById("resultSection");


    if (enrollment === "") {

        message.innerText =
            "Please enter enrollment number.";

        resultSection.style.display = "none";

        return;
    }


    let student = students[enrollment];


    if (!student) {

        message.innerText =
            "Result not found.";

        resultSection.style.display = "none";

        return;
    }


    message.innerText = "";


    document.getElementById("studentName").innerText =
        student.name;

    document.getElementById("studentEnrollment").innerText =
        student.enrollment;

    document.getElementById("studentSemester").innerText =
        student.semester;


    let subjects = [
        ["DBMS", student.DBMS],
        ["Data Structures", student.DS],
        ["Digital Fundamentals", student.DF],
        ["PCE", student.PCE]
    ];


    let table =
        document.getElementById("marksTable");

    table.innerHTML = "";


    let total = 0;

    subjects.forEach(function(subject) {

        total += Number(subject[1]);

        table.innerHTML += `
            <tr>
                <td>${subject[0]}</td>
                <td>${subject[1]}</td>
            </tr>
        `;

    });


    let percentage =
        (total / 400) * 100;


    document.getElementById("totalMarks").innerText =
        total + " / 400";

    document.getElementById("percentage").innerText =
        percentage.toFixed(2);


    let pass = subjects.every(function(subject) {
        return Number(subject[1]) >= 33;
    });


    document.getElementById("resultStatus").innerText =
        pass ? "PASS" : "FAIL";


    resultSection.style.display = "block";
}


// Admin Login

function adminLogin() {

    let password =
        document.getElementById("adminPassword").value;


    if (password === "admin123") {

        document.getElementById("adminPanel").style.display =
            "block";

        alert("Admin Login Successful");

    } else {

        alert("Wrong Password");

    }
}


// Save Student

function saveStudent() {

    let enrollment =
        document.getElementById("enrollment").value.trim();

    let name =
        document.getElementById("name").value.trim();

    let semester =
        document.getElementById("semester").value.trim();

    let dbms =
        Number(document.getElementById("dbms").value);

    let ds =
        Number(document.getElementById("ds").value);

    let df =
        Number(document.getElementById("df").value);

    let pce =
        Number(document.getElementById("pce").value);


    if (!enrollment || !name) {

        alert("Enrollment number and name are required.");

        return;
    }


    students[enrollment] = {

        name: name,
        enrollment: enrollment,
        semester: semester,

        DBMS: dbms,
        DS: ds,
        DF: df,
        PCE: pce

    };


    alert("Student saved successfully!");

    clearForm();

}


// Clear Form

function clearForm() {

    document.getElementById("enrollment").value = "";

    document.getElementById("name").value = "";

    document.getElementById("semester").value = "";

    document.getElementById("dbms").value = "";

    document.getElementById("ds").value = "";

    document.getElementById("df").value = "";

    document.getElementById("pce").value = "";

}