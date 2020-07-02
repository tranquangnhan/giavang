var giabanhomqua = document.querySelector('.giabanhomqua').innerHTML;
var giabanhomnay = document.querySelector('.giabanhomnay').innerHTML;
var tanggiam = document.querySelector('.tanggiam');
//lấy element tiền
var pigiabanhomqua = giabanhomqua.replace(/\,/g, '.');
//đổi dấu phẩy thành dấu chấm
var subhomqua = pigiabanhomqua.substring(0, 5);
//lấy 4 kí tự đầu tiên
var pfhomqua = parseFloat(subhomqua);
// đổi string thành float
var pigiabanhomnay = giabanhomnay.replace(/\,/g, '.');
var subhomnay = pigiabanhomnay.substring(0, 5);
var pfhomnay = parseFloat(subhomnay);

var giatritanggiam = parseFloat(pigiabanhomnay) - parseFloat(pigiabanhomqua);

tanggiam.innerHTML = giatritanggiam.toPrecision(6) + ' đ';
import Highcharts from 'https://code.highcharts.com/js/es-modules/masters/highcharts.src.js';
$(function() {
    Highcharts.chart('chart1', {
        title: { text: 'Theo dõi giá vàng hôm nay', },
        xAxis: {
            categories: ['Hôm qua', 'Hôm nay']
        },
        yAxis: { title: { text: 'Cột tăng trưởng' }, plotLines: [{ value: 0, width: 1, color: '#808080' }] },
        tooltip: { valueSuffix: ' đ' },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{ data: [pfhomqua, pfhomnay] }]
    });
});