// declare object patient
let patient = 
[{
    name: 'John',
    status: 'Positive'
},
{
    name: 'Mike',
    status: "Suspect"
},
{
    name: 'Risa',
    status: 'Positive'
}];

let cek = "Positive";

//pake switch

for (let i=0; i<patient.length; i++) {
    switch (patient[i].status) {
        case "Positive":
            console.log(patient[i].name);
            break;
    }
}

//pake if
/*
for (let i=0; i<patient.length; i++) {
    if (cek==patient[i].status) {
        console.log(patient[i].name);
    }
}*/