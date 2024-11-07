const NCRs = [
{id: '2024-001', Supplier:'ABC Industries', NCRDate: '2024-10-21', Product: 'Watch', Model: 'W-123', NCRStatus: 'OPEN'},
{id: '2024-002', Supplier:'Zenith Supplies', NCRDate: '2024-10-22', Product: 'Notebook', Model: 'NB-456', NCRStatus: 'OPEN'},
{id: '2024-003', Supplier:'Global Materials', NCRDate: '2024-10-23', Product: 'Watch', Model: 'W-304', NCRStatus: 'OPEN'},
{id: '2024-004', Supplier:'SupplyCo', NCRDate: '2024-10-24', Product: 'Notebook', Model: 'NB-890', NCRStatus: 'OPEN'},
{id: '2024-005', Supplier:'Prime Solutions', NCRDate: '2024-10-25', Product: 'Watch', Model: 'W-090', NCRStatus: 'OPEN'},
{id: '2024-006', Supplier:'Nexa Resources', NCRDate: '2024-10-26', Product: 'Electronic Fan', Model: 'EF-123', NCRStatus: 'OPEN'},
{id: '2024-007', Supplier:'Quality First Inc.', NCRDate: '2024-10-27', Product: 'Watch', Model: 'WT-455', NCRStatus: 'OPEN'},
{id: '2024-008', Supplier:'Elite Components', NCRDate: '2024-10-28', Product: 'Hair Dryer', Model: 'HR-123', NCRStatus: 'OPEN'},
{id: '2024-009', Supplier:'Topline Traders', NCRDate: '2024-10-29', Product: 'Sports Shoes', Model: 'SS-810', NCRStatus: 'OPEN'},
{id: '2024-010', Supplier:'Superior Supplies', NCRDate: '2024-10-30', Product: 'Sun Glasses', Model: 'SG-123', NCRStatus: 'OPEN'},
{id: '2024-011', Supplier:'Superior Supplies', NCRDate: '2024-10-30', Product: 'Sun Glasses', Model: 'SG-123', NCRStatus: 'CLOSE'},
{id: '2024-012', Supplier:'Superior Supplies', NCRDate: '2024-10-30', Product: 'Sun Glasses', Model: 'SG-123', NCRStatus: 'CLOSE'},
{id: '2024-013', Supplier:'Superior Supplies', NCRDate: '2024-10-30', Product: 'Sun Glasses', Model: 'SG-123', NCRStatus: 'CLOSE'},
];


let totalNumProducts = 50;
let totalNCRs = NCRs.length;


let matches = NCRs.filter((NCR)=> NCR.NCRStatus == "OPEN");
let OpenNCRs = matches.length;

function avgOpenNCR (OpenNCRs, totalNCRs)
{
  return (OpenNCRs / totalNCRs)*100;

}

function calAverage(totalNCRs, totalNumProducts)
{
   return (totalNCRs / totalNumProducts)*100;

}

function updateProgressPie()
{
  let result = calAverage(totalNCRs, totalNumProducts);
  let defectFill = document.getElementById('defectFill');
  defectFill.textContent=`${result.toFixed(0)}%`;
  let rotationAngle = result * 3.6;
  let fillElement = document.querySelector('.fill');
  fillElement.style.transform= `rotate(${rotationAngle}deg)`;

}



function updateProgressBar()
{
  let average = avgOpenNCR(OpenNCRs,totalNCRs);
  let progressFill = document.getElementById('progressFill');
  let progressText = document.getElementById('progressText');
  progressFill.style.width = `${average}%`;
  progressText.textContent=`${average.toFixed(2)}%`;


}
/*document.addEventListener('DOMContentLoaded',updateProgressBar)*/

document.addEventListener('DOMContentLoaded', function()
{
   updateProgressBar();
   updateProgressPie();
});