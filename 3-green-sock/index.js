let masterTimeline = new TimelineMax();

masterTimeline.to('#logo1', 1, {x:850})
              .to('#logo2', 1, {y:830}, '-=0.5')  
              .add(animateLogo3(), '-=0.5')

function animateLogo3() {
    let logo3Timeline = new TimelineMax()
    logo3Timeline.to('#logo3', 1, {x:0})
    return logo3Timeline
}












