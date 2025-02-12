player.onChat("Espiral2D", function (index1) {
    _2DSpiral(index1)
})
function _2DSpiral (square_num: number) {
    builder.teleportTo(pos(0, 0, 0))
    player.teleport(pos(5, 0, 0))
    for (let index = 0; index <= square_num; index++) {
        builder.move(FORWARD, index)
        builder.tracePath(JACK_O_LANTERN)
        builder.turn(RIGHT_TURN)
    }
}
player.onChat("esfera", function (index1) {
    shapes.sphere(
    list1[index1],
    pos(0, 5, 0),
    5,
    ShapeOperation.Replace
    )
})
player.onChat("círculo", function (index1) {
    shapes.circle(
    list1[index1],
    pos(0, 5, 0),
    5,
    Axis.X,
    ShapeOperation.Replace
    )
})
player.onChat("línea", function (index1) {
    shapes.line(
    list1[index1],
    pos(0, 0, 0),
    pos(10, 0, 0)
    )
})
let list1: number[] = []
list1 = [
LIGHT_BLUE_GLAZED_TERRACOTTA,
SEA_LANTERN,
YELLOW_GLAZED_TERRACOTTA,
BEACON
]
