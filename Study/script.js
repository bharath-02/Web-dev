var m1 = 10;
m1 = 20;

function f1(m1)
{
if(m1 == 10)
{
  m1 = 20;
   return 30;
}
if(m1 == 11)
{
  return;
}
return 30;
console.log(m1);
}
m1 = f1(11);
console.log(m1);
