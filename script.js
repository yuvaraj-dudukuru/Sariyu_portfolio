// icon navbar
let menuIcon = document.queryselectorAll('#menu-icon');
let navbar = document.queryselectorAll('.navbar');

menuIcon.oneclick = () => {
    menuIcon.classLinst.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll ssection

let sections = document.queryselectorAll('section');
let navLinks = document.queryselectorAll('header nav a');

windows.onscroll = () => {
    sections.forEach(sec => {
        let top = windowa.scrolly;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top > offset && top < offset + height) {
            // navbar links
            navLinks.forEach(links => {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    documents.queryselector('header nav a[herf*=' + id +']').classList.add('active');
                    
                });
            });

            //active section for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that represents on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    //sticky header
let header = document.queryselectorAll('header');

header.classList.toggle('sticky', window.scrolly > 100);

//remove toggle icon and navbar when clixk navbar lines (scroll)

menuIcon.classList.remove('bx-x');
navbar.classLinst.remove('active');

// animate footer on scroll
let footer = document.queryselector('footer');

footer.classList.toggle('show-animate', this.innerHeight = this.scrolly >= documentElement.scrollHeight)
}

