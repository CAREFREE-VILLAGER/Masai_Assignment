class Counter {
    constructor() {
      this.value = 0;
      this.interval = null;
  
      
    
      this.counterDisplay = document.querySelector('.counter');
      this.startStopButton = document.querySelector('.start-stop-button');
      this.incrementButton = document.querySelector('.increment-button');
      this.decrementButton = document.querySelector('.decrement-button');
  
      this.startStopButton.addEventListener('click', this.toggleCounter.bind(this));
      this.incrementButton.addEventListener('click', this.increment.bind(this));
      this.decrementButton.addEventListener('click', this.decrement.bind(this));
    }
  
    increment() {
      this.stopCounter();
      this.value++;
      this.updateDisplay();
    }
  
    decrement() {
      this.stopCounter();
      this.value--;
      this.updateDisplay();
    }
  
    toggleCounter() {
      if (this.interval) {
        this.stopCounter();
        this.startStopButton.textContent = 'Start';
      } else {
        this.startCounter();
        this.startStopButton.textContent = 'Stop';
      }
    }
  
    startCounter() {
      this.interval = setInterval(() => {
        this.value++;
        this.updateDisplay();
      }, 1000);
    }
  
    stopCounter() {
      clearInterval(this.interval);
      this.interval = null;
    }
  
    updateDisplay() {
      this.counterDisplay.textContent = this.value;
    }
  }
  
  const counter = new Counter();
  