class CalcController{
    constructor(){
        this._operation = [];
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

    setError(){
        this.displayCalculatorEl = "Error";
    }

    ClearAll(){
        this.operation = [];
    }

    Clear

    execbtn(value){
        switch(value){
            case 'btn-1':
                console.log("q");
                break;
            case 'btn-2':
                console.log("q");
                break;
            case 'btn-3':
                console.log("q");
                break;
            case 'btn-4':
                console.log("q");
                break;
            case 'btn-5':
                console.log("q");
                break;
            case 'btn-6':
                console.log("q");
                break;
            case 'btn-7':
                console.log("q");
                break;
            case 'btn-8':
                console.log("q");
                break;
            case 'btn-9':
                console.log("q");
                break;
            case 'btn-ponto':
                console.log("q");
                break;
            case 'btn-igual':
                console.log("q");
                break;
            case 'btn-soma':
                console.log("q");
                break;
            case 'btn-porcento':
                console.log("q");
                break;
            case 'btn-subtracao':
                console.log("q");
                break;
            case 'btn-multiplicacao':
                console.log("q");
                break;
            case 'btn-divisao':
                console.log("q");
                break;
            case 'btn-ac':
                console.log("q");
                break;
            case 'btn-ce':
                console.log("q");
                break;
            default:
                this.setError();
                break;
        }
    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
    
        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, "click drag", (element) => {
                let Textbtn = btn.className.baseVal;

                this.execbtn(Textbtn);
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

    get operation(){
        return this._operation;
    }

    set operation(value){
        this._operation = value;
    }

}