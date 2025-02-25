//TheAnh


const topMenu = document.getElementById('ct-top-menu')
const toggleTopMenu = document.getElementById('ct--toogle-top-menu')


document.addEventListener('click', (e) => {
    //click vào đúng cái icon đó
    if(toggleTopMenu.contains(e.target)) {
        //Click to Toggle menu
        topMenu.classList.toggle('ct-top-menu-group')// loại bỏ gạch chân và xử lý absolute
        topMenu.classList.toggle('hidden') //có thì gỡ không thì thôi
       
    }
    else{
        //Click outSide
        if(topMenu.classList.contains('ct-top-menu-group'))//đang mở menu
            {
                topMenu.classList.remove('ct-top-menu-group')
                topMenu.classList.add('hidden')
            } 
        

    }

})