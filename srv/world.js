module.exports = async function() {

    this.on("world", async(req) => {
        return "Hello World!"
    })

}
