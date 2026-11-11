var text = `<a href="mail.html" id="footermaillink" style="color: #fff" ><i>Write us a mail</i></a>`;

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `

        <div class="footer">
            ${text}
            <p>Tata Lauryn</p>
            <p>All Rights Reserved \u00A9 2026</p>
        </div>

        `;
        this.highlightCurrentPage();
    }


    highlightCurrentPage(){
        const path = window.location.pathname.split('/').pop();
        const mailLinks = this.querySelector('#footermaillink');

        const href = mailLinks.getAttribute('href').split('/').pop();

                if (href !==  path){
                    mailLinks.style.display = 'inline-block';
                }
                else {
                    mailLinks.style.display = 'none';
                }
        
          
    }

}

customElements.define('my-js-footer',MyFooter);