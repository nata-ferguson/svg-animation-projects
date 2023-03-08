let masterTimeline = new TimelineMax();

masterTimeline
              .add('beginning')
              .to('#logo1', 1, {x:850})
              .add('endlogo1')
              .to('#logo2', 1, {y:830}, 'endlogo1-=0.5')  
              .to('#logo3', 1, {x:0, onComplete: showBigLogo, onCompleteParams: ['orange']}, '-=0.5')  
              

function showBigLogo(color) {
    let bigL = document.querySelector('#bigLogo')
    TweenMax.set(bigL, {
        autoAlpha: 1,
        fill: color
    })
}












