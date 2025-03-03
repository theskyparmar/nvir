
let highestZ = 1;

class Paper {
    constructor() {
        this.holdingPaper = false;
        this.prevmouseX = 0;
        this.prevmouseY = 0;
        this.mouseX = 0;
        this.mouseY = 0;
        this.velocityX = 0;
        this.velocityY = 0;
        this.currentPaperX = 0;
        this.currentPaperY = 0;
    }

    init(paper) {
        paper.addEventListener('mousedown', (e) => {
            this.holdingPaper = true;
            paper.style.zIndex = highestZ;
            highestZ += 1;

            this.prevmouseX = e.clientX;
            this.prevmouseY = e.clientY;
        });

        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            
            if (this.holdingPaper) {
                this.velocityX = this.mouseX - this.prevmouseX;
                this.velocityY = this.mouseY - this.prevmouseY;
                
                this.currentPaperX += this.velocityX;
                this.currentPaperY += this.velocityY;
                
                this.prevmouseX = this.mouseX;
                this.prevmouseY = this.mouseY;
                
                paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px)`;
            }
        });

        document.addEventListener('mouseup', () => {
            this.holdingPaper = false;
        });
    }
}
// Add this after the Paper class definition
document.querySelectorAll('.paper , .paper3 , .paper2 , .paper1 , .paper0 , .paper4 , .paper5').forEach(paper => {
    const p = new Paper();
    p.init(paper);  
});
