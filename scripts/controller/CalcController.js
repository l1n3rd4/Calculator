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
        this._operation = [];
    }

    ClearEntry(){
        return this.operation.pop();
    }

    getLastOperation(){
        return this.operation[this._operation.length - 1];
    }
    
    isOperator(value){
        return (["/", "%", "*", "+", "-", "="].indexOf(value) > -1)
    }

    addOperation(value){
        value = value.replace("btn-","");
        //this.operation = value;

        if(isNaN(this.getLastOperation())){
            if(this.isOperator(value)){

            } else if (isNaN(value)){

            } else {
                this.operation = value;
            }
        } else {
            let newValue = this.getLastOperation() + value;
            this.operation = newValue;
        }


        console.log(this.operation);
    }

    execbtn(value){
        switch(value){
            case 'btn-0':
            case 'btn-1':
            case 'btn-2':
            case 'btn-3':
            case 'btn-4':
            case 'btn-5':
            case 'btn-6':
            case 'btn-7':
            case 'btn-8':
            case 'btn-9':
                this.addOperation(value);
                break;
            case 'btn-ponto':
                this.addOperation(".");
                break;
            case 'btn-igual':
                this.addOperation("=");
                break;
            case 'btn-soma':
                this.addOperation("+");
                break;
            case 'btn-porcento':
                this.addOperation("%");
                break;
            case 'btn-subtracao':
                this.addOperation("-");
                break;
            case 'btn-multiplicacao':
                this.addOperation("*");
                break;
            case 'btn-divisao':
                this.addOperation("/");
                break;
            case 'btn-ac':
                this.ClearAll();
                break;
            case 'btn-ce':
                this.ClearEntry();
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
        console.log("teste",value);
        this._operation.push(value);
    }

}