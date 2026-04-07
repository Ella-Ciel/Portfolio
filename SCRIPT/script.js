window.onload = function(){
    const jumpBtn = document.getElementById('jumpBtn');

    if (jumpBtn){
        window.onscroll = function (){
            console.log("Current Scroll: ", window.pageYOffset || document.documentElement.scrollTop);

            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
                jumpBtn.classList.add('show');
            }

            else{
                jumpBtn.classList.remove('show');
            }
        };
    }

    else{
        console.error("Button with ID 'jumpBtn' not found!");
    }
}