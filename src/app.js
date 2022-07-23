/*
(HBeli - HJual) * modal / Hjual * lev
Modal * lev * HBeli - Hjual - 

margin * Selisih / Hjual

(31000 - 30000 = 1000) * (10 x 5 = 50) / 1000
 */

const equity = document.querySelector('#equity');
const entry = document.querySelector('#entry');
const exit = document.querySelector('#exit');
const leverage = document.querySelector('#leverage');
// const hitung = document.querySelector('#hitung');
let hitung = document.getElementById('hitung')


const short = document.querySelector('#short');
const long = document.querySelector('#long');
const fCalculator = document.getElementById('calculator');
const showCount = document.querySelector('.showCount');

hitung?.addEventListener('click', function throwData() {
    if ((equity.value, entry.value, exit.value, leverage.value) == '') {
        showCount.innerHTML = 'isi data';
    } else {
        return getData(equity.value, entry.value, exit.value, leverage.value);
    }
});


function getData(equity, entry, exit, leverage) {
    this.equity = equity;
    this.entry = entry;
    this.exit = exit;
    this.leverage = leverage;


    function countTrade() {
        const difference = this.entry - this.exit;
        const equityRate = this.equity * this.leverage;

        console.log(difference);

        return equityRate * Math.abs(difference) / this.exit
    }

    if (document.querySelector('#calculator.active-trade')) {
        if (this.entry > this.exit) {
            showCount.innerHTML = `+ ${countTrade()}`;
        } else {
            showCount.innerHTML = `- ${countTrade()}`;
        }
    } else {
        if (this.entry > this.exit) {
            showCount.innerHTML = `- ${countTrade()}`;
        } else {
            showCount.innerHTML = `+ ${countTrade()}`;
        }
    }

}

short?.addEventListener('click', () => {
    fCalculator.classList.add('active-trade');
    long.classList.remove('bg-red-600');
    long.classList.add('bg-slate-200');
    short.classList.add('bg-red-600');
    showCount.innerHTML = '0';
})

long?.addEventListener('click', () => {
    fCalculator.classList.remove('active-trade');
    short.classList.remove('bg-red-600');
    short.classList.add('bg-slate-200');
    long.classList.add('bg-red-600');
    showCount.innerHTML = '0';
})




