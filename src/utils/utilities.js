export const drawRect = (detections, ctx) => {

    detections.forEach(predictions => {
        const [x,y,width,height] = predictions['bbox']
        const text = predictions['class']

        const color = 'red'
        ctx.strokeStyle = color
        ctx.font = '18px Arial'
        ctx.fillStyle = color

        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()
    });

}