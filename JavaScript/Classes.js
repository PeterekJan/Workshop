class Chair {
    constructor(color, seatHeight, recliningAngle, backSupport, headSupport, padding, armRests, seatSize, isHeightAdjustable, isMovable){
        //Defaults which can be changed by the subclass class.
        this.color = color;
        this.seatHeight = seatHeight;
        this.recliningAngle = recliningAngle;
        this.backSupport = true;
        this.headSupport = false;
        this.padding = "3 inch";
        this.armRests = true;
        this.seatSize = "16 inch";
        this.isHeightAdjustable = false;
        this.isMovable = false;
        this.type = "Chair";
    }
    
    adjustableHeight() {};
    adjustAngle(){};
    moveChair(){};    
}

const newChair = new Chair();