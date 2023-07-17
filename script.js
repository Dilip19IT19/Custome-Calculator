document.querySelector("img").addEventListener("click",function()
{
 
  document.querySelector("img").setAttribute("src","./images/night.png");
  document.querySelector("body").style.backgroundColor="#191919";

})




let str="";
for(let i=0;i<document.querySelectorAll(".key").length;i++)
{
  document.querySelectorAll(".key")[i].addEventListener("click",function()
  {
    let text=document.querySelectorAll(".key")[i].textContent;
    if(text=='=')
    {
      str=eval(str);
      document.querySelector('input').value = str;
    }
    else if(text=='C')
    {
      str="";
      document.querySelector('input').value = str;
    }
    else{
      str+=text;
      document.querySelector('input').value = str;
    }
  })
}