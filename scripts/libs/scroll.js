class IntersectionObserverClass {
    constructor(elements, addedClass) {
        this.elements = elements.map(element => document.querySelectorAll(element));
        this.addedClass = addedClass;
        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const threshold = entry.intersectionRatio;
                if (threshold > 0.15) {
                    this.addedClass.forEach(className => {
                        entry.target.classList.add(className);
                    });
                    this.observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15
        });
    }
    startObserver() {
        this.elements.forEach((element,index) => {
            element.forEach(el => {
                this.observer.observe(el);
            });
        });
    }
}
const observerClass = new IntersectionObserverClass(
    ['.animation-under','.animation-left','.animation-right'], 
    ['active-under','active-left','active-right']);
observerClass.startObserver();


$(document).ready(function(){
    $('.nav-link').on('click', function(e){
      e.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(target).offset().top
      }, 200);
    });
  });
