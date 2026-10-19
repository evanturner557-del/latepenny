(function(){var f=document.getElementById('calc'),o=document.getElementById('result');if(!f)return;
function run(){var v={};f.querySelectorAll('input[data-k]').forEach(function(i){var n=parseFloat(i.value);v[i.getAttribute('data-k')]=isNaN(n)?0:n;});
o.innerHTML=(function(v){var r=(8+v.base)/100;var i=v.amt*r*v.days/365;var c=v.amt<1000?40:(v.amt<10000?70:100);return 'Interest: <strong>£'+i.toFixed(2)+'</strong> ('+(8+v.base).toFixed(2)+'% a year for '+v.days+' days). Fixed compensation: <strong>£'+c+'</strong>. Total extra: <strong>£'+(i+c).toFixed(2)+'</strong>.';})(v);}
f.addEventListener('input',run);f.addEventListener('submit',function(ev){ev.preventDefault();run();});run();})();
