    function zugriff(index){
        document.getElementById('placeholder').innerHTML = '<img sizes="(max-width: 1080px) 100vw, 1080px"srcset="data/maus/deathadder'+index+'_5_c4fig7/deathadder'+index+'_5_c4fig7_c_scale,w_180.png 180w,data/maus/deathadder'+index+'_5_c4fig7/deathadder'+index+'_5_c4fig7_c_scale,w_529.png 529w,data/maus/deathadder'+index+'_5_c4fig7/deathadder'+index+'_5_c4fig7_c_scale,w_743.png 743w,data/maus/deathadder'+index+'_5_c4fig7/deathadder'+index+'_5_c4fig7_c_scale,w_929.png 929w,data/maus/deathadder'+index+'_5_c4fig7/deathadder'+index+'_5_c4fig7_c_scale,w_1080.png 1080w"src="data/maus/deathadder'+index+'_5_c4fig7/deathadder'+index+'_5_c4fig7_c_scale,w_1080.png"alt="">'
        document.getElementById('mouse').style.backgroundImage = 'url(data/color'+index+'.png)';
        
    }
    
    
    function scrolltransition(){
        let transition = document.querySelector('#transition');
        let pixels = window.scrollY;

        if(pixels > 200){
            document.getElementById('linkimg').style.opacity = '50%';
        }else if(pixels < 200){
            document.getElementById('linkimg').style.opacity = '100%';
        }

        if(pixels > 800){
            document.getElementById('transition').style.opacity = '0%'
        }else if(pixels < 800){
            document.getElementById('transition').style.opacity = '100%'
    
        }
    
        
    }
    
        window.addEventListener('scroll',scrolltransition);

      