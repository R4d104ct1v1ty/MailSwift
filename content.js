
const init = function() {

    const head = document.getElementsByTagName('head')[0];
    const smtp = document.createElement('script');
    smtp.setAttribute('src', "https://smtpjs.com/v3/smtp.js");
    head.appendChild(smtp);

    // adding mail merge button to compose
    const row = document.getElementsByClassName("btC")[0];
    const tableData = document.createElement("td");
    const btn = document.createElement("button");
    btn.className = 'bttn-class';
    btn.disabled = false;
    const text = document.createTextNode("Mail Merge");
    btn.appendChild(text);
    tableData.appendChild(btn);
    row.appendChild(tableData);
    
    //adding a new field to compose to choose excel file
    const form1 = document.getElementsByClassName("bAs")[0];
    const container = document.createElement("div");
    const myForm = document.createElement("form");
    myForm.className = 'added-form';
    const innerContainer = document.createElement('div');
    innerContainer.className = 'inner-container';
    const inpfile = document.createElement('input');
    inpfile.className = 'file';
    inpfile.id = 'file';
    const label = document.createElement('label');
    label.setAttribute('for', 'file');
    innerContainer.appendChild(inpfile);
    innerContainer.appendChild(label);
    const btn2 = document.createElement('input');
    btn2.setAttribute('type', 'button');
    btn2.className = 'clear-button';
    btn2.setAttribute("value", "Clear Selection");
    btn2.disabled = false;
    const horRule = document.createElement('hr');
    horRule.id = 'mm-horrule';
    inpfile.setAttribute("type", "file");
    myForm.appendChild(innerContainer);
    myForm.appendChild(btn2);
    container.appendChild(myForm);
    container.appendChild(horRule);
    form1.appendChild(container);
    btn2.addEventListener('click', (e) => {
        e.preventDefault();
        inpfile.value = "";
    });


    let arr = [];

    function readCSVFile(){
        arr = [];
        const files = inpfile.files;

        if(files.length > 0){
            const file = files[0];
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function(event){
                const csvdata = event.target.result;
                const rowData = csvdata.split('\n');
                for(let row = 1; row < rowData.length; row++){
                    rowColData = rowData[row].split(',');
                    let dataJSON = {
                        mmsi: rowColData[0],
                        lat: rowColData[1],
                        lon: rowColData[2],
                        course: rowColData[3],
                        heading: rowColData[4],
                        speed: rowColData[5],
                        roc: rowColData[6],
                        tcpa: rowColData[7],
                        cpa: rowColData[9]
                    }
                    arr.push(dataJSON);
                }
            }
        }
    }

    // adding onclick functionality to button
    btn.addEventListener('click', () => {
        if(!inpfile.value){
            alert("Please select a CSV file");
        }else{
            //readCSVFile();
        }
    })
}

setTimeout(init, 5000);

