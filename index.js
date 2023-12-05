var flag=true;



function submitbtn(){
var name=document.getElementById("namee").value
var age=document.getElementById("agee").value
var gender=document.querySelector("input[name='gender']:checked").value
var course=document.getElementById("coursee").value
var email=document.getElementById("emaill").value
if(name==""){alert("enter the name ");flag=false}
if(age==""){alert("enter the age ");flag=false}
if(gender==""){alert("enter the gender ");flag=false}
if(course==""){alert("select the course");flag=false}
if(flag==true){
var tr=document.createElement('tr');
var td1=tr.appendChild(document.createElement('td'));
var td2=tr.appendChild(document.createElement('td'));
var td3=tr.appendChild(document.createElement('td'));
var td4=tr.appendChild(document.createElement('td'));
var td5=tr.appendChild(document.createElement('td'));
var td6=tr.appendChild(document.createElement('td'));
td1.innerHTML=name;
td2.innerHTML=age;
td3.innerHTML=gender;
td4.innerHTML=course;
td5.innerHTML=email;
td6.innerHTML='<button onclick="delete_entry(event)">delete</button>'}
document.getElementById("namee").value=""
document.getElementById("agee").value=""
document.querySelector("input[name='gender']:checked").value=""
document.getElementById("coursee").value=""
document.getElementById("emaill").value=""
document.querySelectorAll('input[name="gender"]').forEach(function(radio){
    radio.checked=false;
});


document.getElementById("tb1").appendChild(tr);

}
function delete_entry(event){
    event.target.parentElement.parentElement.remove()
}