let color =['blue','orange','red','green','pink','yellow','black']

let button=document.getElementById('button');

button.addEventListener('click',function(){
    let index=parseInt((Math.random()*color.length)+1)
    let main=document.getElementById('main');
    main.style.background=`${color[index]}`
})