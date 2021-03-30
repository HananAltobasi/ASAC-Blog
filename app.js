'use strict'
let form1=document.getElementById('form1');
let form2=document.getElementById('form2');
let dataList=document.getElementById('data-list');

 let subButton=document.getElementById('sub');
function InputData(Aname,Atital,sub,cont,day,manth,year){
    this.Aname=Aname;
    this.Atital=Atital;
    this.sub=sub;
    this.cont=cont;
    this.day=day;
    this.manth=manth;
    this.year=year;
    InputData.allData.push(this);
    localStorage.setItem('data',JSON.stringify(InputData.all));
}
InputData.allData=[];
function hunleSubmit(event){
    event.preventDefault();
console.log(event.target);
let allData=event.target;
let Aname=allData.Aname.value;
let Atital=allData.Atital.value;
let sub=allData.sub.value;
let Acont=allData.cont.value;
let day=allData.day.value;
let manth=allData.manth.value;
let year=allData.year.value;
new InputData(Aname,Atital,sub,Acont,day,manth,year);
render();
}
function render(){
    dataList.textContent=' ';
    let List=getData();

    if(List===null){
        List=InputData.allData;
    }
    for(let i=0;i<List.length;i++){ 
    let dataL=document.createElement('li');
    let Pinformation=document.createElementNS('p');
    Pinformation.textContent=`${List[i].Aname} /n Date: ${List[i].day} - ${List[i].manth} - ${List[i].year} /n 
    ${List[i].Acont}`;    
    dataL.appendChild(Pinformation);
    List.appendChild(dataL);
    } 
}
function getData(){
    let Data=localStorage.getItem('dataList');
    Data=JSON.parse(Data);
    return Data
}
form1.addEventListener('submit',hunleSubmit);
render();
