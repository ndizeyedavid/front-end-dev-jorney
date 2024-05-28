let opts = document.querySelectorAll('.opt');
let navs = document.querySelectorAll('.nav-link');
let proj_container = document.querySelector('.projects-container');
let loading_cont = document.querySelector('.preloader');
let loading = document.querySelector('.loading');
opts.forEach(opt => {
    opt.onclick = () =>{
        opts.forEach(opt =>{
            opt.classList.remove('active');
        });
        opt.classList.add('active');
    }
});

navs.forEach(nav => {
    nav.onclick = () =>{
        navs.forEach(nav =>{
            nav.classList.remove('active');
        });
        nav.classList.add('active');
    }
});

// continue scrolling
let scroll_width_max = proj_container.scrollLeftMax;
let scroll_width = 0;

var id = setInterval(()=>{
    if(scroll_width >= scroll_width_max){
        scroll_width = 0;
    }
    proj_container.scrollLeft=scroll_width;
    scroll_width+=2;
}, 5);

// loading bar
let progress = 0;
function load_now(){
    var l_id = setInterval(()=>{
        // alert('mellow');
        if (progress >= 100){
            clearInterval(l_id);
            loading_cont.style.display='none';
        }
        loading.style.width=`${progress}%`;
        progress++;
    }, 18);
}