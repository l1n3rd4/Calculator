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

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }
}