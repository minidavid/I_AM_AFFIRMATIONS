class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `

            <div style="display: grid; margin-right: 6%; margin-left: 5%; margin-top: 10%; padding:3%; margin-top: 3%; justify-content: end; align-items: end;">
                <p><i>by Tata Lauryn</i></p>
            </div>
        
            <nav>

                <a href="index.html" class="child1">
                    Home
                </a>
                <a href="news.html" class="child">News</a>
                <a href="tutorials.html" class="child">Tutorials</a>
                <a href="about.html" class="child">About</a>
            </nav>
        `;
        this.highlightCurrentPage();
    }


    highlightCurrentPage(){
        const path = window.location.pathname.split('/').pop();
        const links = this.querySelectorAll('nav a');
        links.forEach(link => {

            const href = link.getAttribute('href');
          

            if (href.split('/').pop() ===  path){
                link.style.textDecoration = "underline";
                link.style.textUnderlineOffset = "6px";
            }
            
            else {
                link.style.textDecoration = "none"
            }
        });
    }
}


customElements.define('my-js-header',MyHeader);