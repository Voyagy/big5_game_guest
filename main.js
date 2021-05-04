const addC = document.querySelector("#add-concord");
const rmvC = document.querySelector("#rmv-concord");
const addE = document.querySelector("#add-external");
const rmvE = document.querySelector("#rmv-external");
const addO = document.querySelector("#add-open");
const rmvO = document.querySelector("#rmv-open");
const addH = document.querySelector("#add-honest");
const rmvH = document.querySelector("#rmv-honest");
const addN = document.querySelector("#add-neurosis");
const rmvN = document.querySelector("#rmv-neurosis");
const concord = document.querySelector("#concord-param");
const external = document.querySelector("#external-param");
const opening = document.querySelector("#open-param");
const honesty = document.querySelector("#honest-param");
const neurosis = document.querySelector("#neurosis-param");
const countBtn = document.querySelector(".count-btn");
const resultC = document.querySelector("#concord-result");
const resultE = document.querySelector("#external-result");
const resultO = document.querySelector("#open-result");
const resultH = document.querySelector("#honest-result");
const resultN = document.querySelector("#neurosis-result");
const nameBox = document.querySelector(".name-box");
const resultName = document.querySelector(".result-name");

let positiveC = 0;
let positiveE = 0;
let positiveO = 0;
let positiveH = 0;
let positiveN = 0;
let negativeC = 0;
let negativeE = 0;
let negativeO = 0;
let negativeH = 0;
let negativeN = 0;

let countC = 0;
let countE = 0;
let countO = 0;
let countH = 0;
let countN = 0;

class Countup {
  constructor(a, r, i){
  a.addEventListener("click", ()=>{
    if(i < 9){
      i += counter(1);
    }else{
      a.style.backgroundColor  = 'rgba(168,160,171,1)';
      a.setAttribute('disabled', "");
      r.style.backgroundColor  = 'rgba(168,160,171,1)';
      r.setAttribute('disabled', "");
    };
  });
  r.addEventListener("click", ()=>{
    if(i < 9){
      i += counter(1);
    }else{
      a.style.backgroundColor  = 'rgba(168,160,171,1)';
      a.setAttribute('disabled', "");
      r.style.backgroundColor  = 'rgba(168,160,171,1)';
      r.setAttribute('disabled', "");
    };
  });
}}

function counter(count){
  return  count ++;
};

new Countup(addC, rmvC, countC);
new Countup(addE, rmvE, countE);
new Countup(addO, rmvO, countO);
new Countup(addH, rmvH, countH);
new Countup(addN, rmvN, countN);

class result{
  constructor(add, rmv, positive, negative, result){
    add.addEventListener("click", ()=>{
      //実験中・・・//
      positive ++;
      result.textContent = positive + negative;
      });
    rmv.addEventListener("click", ()=>{
      negative --;
      result.textContent = positive + negative;
    })
  }
}

new result(addC, rmvC, positiveC, negativeC, resultC);
new result(addE, rmvE, positiveE, negativeE, resultE);
new result(addO, rmvO, positiveO, negativeO, resultO);
new result(addH, rmvH, positiveH, negativeH, resultH);
new result(addN, rmvN, positiveN, negativeN, resultN);


function btnAdd(param){
  param.value ++;

  if(param.value == 5){
    param.nextElementSibling.style.backgroundColor  = 'rgba(168,160,171,1)';
    param.nextElementSibling.setAttribute('disabled', "");
  };
};

function btnRmv(param, positive, negative, result){
  param.value --;

  if(param.value == -5){
    param.previousElementSibling.style.backgroundColor  = 'rgba(168,160,171,1)';
    param.previousElementSibling.setAttribute('disabled', "");
  };
};

// メンタリスト側で使用
try {
  nameBox.addEventListener("change", ()=>{
    resultName.textContent = nameBox.value;
  });
  throw new Error();
} catch (e) {
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", ()=>{
  location.reload(true);
});
