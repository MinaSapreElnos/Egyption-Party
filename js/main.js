$('.open').click(function(){
    $('.sideBar').animate({width:'250px'},function(){
        $('.open').animate({left:'250px'})
    })
    })

$('.close').click(function(){
    $('.sideBar').animate({width:'0px'},function(){
        $('.open').animate({left:'0px'})
    })
})

$('.h-1').click(function(){
    $('.prg1').slideToggle(1000)
    $('.prg2').hide(1000)
    $('.prg3').hide(1000)
    $('.prg4').hide(1000)
})

$('.h-2').click(function(){
    $('.prg2').slideToggle(1000)
    $('.prg1').hide(1000)
    $('.prg3').hide(1000)
    $('.prg4').hide(1000)
})

$('.h-3').click(function(){
    $('.prg3').slideToggle(1000)
    $('.prg1').hide(1000)
    $('.prg2').hide(1000)
    $('.prg4').hide(1000)
})

$('.h-4').click(function(){
    $('.prg4').slideToggle(1000)
    $('.prg1').hide(1000)
    $('.prg2').hide(1000)
    $('.prg3').hide(1000)
})

let countDownDate=new Date('mar 31 ,2023 20:30:40').getTime() 
  
let counter=setInterval(()=>{
    let dataNow= new Date().getTime();
    
    let diffrDate= countDownDate-dataNow
    let days=Math.floor(diffrDate/(1000*60*60*24))
    document.querySelector('.days').innerHTML=days+'D'

    let hours= Math.floor(diffrDate % (1000*60*60*24) /1000/60/60)
    document.querySelector('.hour').innerHTML=hours+'H'
   
    let mainates= Math.floor(diffrDate % (1000*60*60) /1000/60)
    document.querySelector('.mainates').innerHTML=mainates

    let secends=Math.floor(diffrDate % (1000*60) /1000)
    document.querySelector('.secends').innerHTML=secends
},1000)

let textErea=document.querySelector('#textErea')
let span=document.querySelector('#character'); 
let att=span.getAttribute('maxLength')
span.textContent=att


textErea.addEventListener('input',function(){
    let x = textErea.value.length
    let y=  span.innerHTML
    let res=x-att
    document.querySelector('#character').innerHTML=res
    if(res===100){
        document.querySelector('#character').innerHTML='your available character is finished';
    }
})