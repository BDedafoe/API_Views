class UI {
    constructor() {
      this.uiContainer = document.getElementById("content");
      this.sport_key;
      this.default = " check the scores ";
   
    }
  
    populateUI(data) {
    //   this.uiContainer.innerHTML = `
          
    //       <div class="card mx-auto mt-4" style="width: 30rem;">
    //           <div class="card card-body border-danger">
    //               <p class="card-text ">${data[0].home_team}</p>
    //           </div>
    //        </div>
                  
          
    //       `;
    }
    
  
    clearUI() {
      uiContainer.innerHTML = "";
    }
  
    saveToLS(data) {
      localStorage.setItem("sport_key", JSON.stringify(data));
    }
  
    getFromLS() {
      if (localStorage.getItem("sport_key" == null)) {
        return this.default;
      } else {
        this.sport_key = JSON.parse(localStorage.getItem("sport_key"));
      }
        return this.sport_key;
    }
  
    clearLS() {
      localStorage.clear();
    }
  }