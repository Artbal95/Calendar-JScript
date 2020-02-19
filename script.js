let calendar = {
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    monthName: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    months: new Date().getMonth(),
    years: new Date().getFullYear(),
    init: function (parent, year = this.years, month = this.months) {
        let title = this.createTitle(month);
        let table = this.createTable(5, 7, this.weekdays, month);

        this.parent = document.querySelector(parent);
        this.parent.appendChild(title);
        this.parent.appendChild(table);

        let gFDWK = this.getFirstDayWKday(year, month);
        let gDMC = this.getDayMonthCount(year, month);
        this.inputText(gFDWK, gDMC);

        let getTD = this.gettoday(year, month);
    },
    createTable: function (row, cell, wkdayName) {
        let table = document.createElement("table");
        table.classList.add("calendar_table");
        table.setAttribute("border", "1");
        table.setAttribute("rules", "all");

        let thead = document.createElement("thead");
        let tbody = document.createElement("tbody");
        table.appendChild(thead);
        table.appendChild(tbody);

        let theadTR = document.createElement("tr");
        thead.appendChild(theadTR);
        for (let i = 0; i < cell; i++) {
            let theadTH = document.createElement("th");
            theadTH.innerHTML = wkdayName[i];
            theadTR.appendChild(theadTH);
        }

        for (let i = 0; i < row; i++) {
            let tbodyTR = document.createElement("tr");
            for (let j = 0; j < cell; j++) {
                let tbodyTD = document.createElement("td");
                tbodyTR.appendChild(tbodyTD);
            }
            tbody.appendChild(tbodyTR);
        }
        return table
    },
    createTitle: function (month) {
        let monthTitle = document.createElement("p");
        monthTitle.classList.add("calendar_month");
        monthTitle.innerHTML = this.monthName[month];
        return monthTitle
    },
    getFirstDayWKday: function (year, month) {
        return new Date(year, month, 1).getDay();
    },
    getDayMonthCount: function (year, month) {
        return new Date(year, month + 1, 0).getDate();
    },
    inputText: function (weekname, daycount) {
        let td = this.parent.querySelectorAll("tbody td");
        for (let i = 1; i <= daycount; i++) {
            td[weekname++].innerHTML = `${i}`;
        }
    },
    gettoday: function (year, month) {
        if(month === this.months && year === this.years){
            let date = new Date().getDate();
            let td = this.parent.querySelectorAll("tbody td");
            for (let i = 0; i < td.length; i++){
                if(td[i].innerText === `${date}`){
                    return td[i].style.backgroundColor = "red";
                }
            }
        }


    }
};

let y = Number(prompt("Please Enter the year"));
let m = Number(prompt("Please Enter the month"));
calendar.init("#calendar", y, m - 1 ); /** Create Calendar*/
