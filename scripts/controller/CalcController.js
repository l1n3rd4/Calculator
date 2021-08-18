class CalcController{
    constructor(){
        this._locale = "pt-BR"
        this._displayCalculatorEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora")
        this._currentDate;
        this.initialize();
    }

    initialize(){
        this.setDisplayDateTime();
        
        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);

        this.initButtonsEvents();
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach((event) => {
            element.addEventListener(event, fn, false);
        });
    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
    
        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, "click drag", (element) => {
                console.log(btn.className.baseVal);
            });
            
            this.addEventListenerAll(btn, "mouseover mouseup mousedown", (element) => {
                btn.style.cursor = "pointer"
            });
        });
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayCalculatorEl(){
        return this._displayCalculatorEl.innerHTML;
    }

    set displayCalculatorEl(value){
        this._displayCalculatorEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        this._dateEl.innerHTML = value;
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }
}