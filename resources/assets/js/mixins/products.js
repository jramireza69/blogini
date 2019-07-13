export default {
    props: {
        logged: {
            type: Boolean,
            required: true
        }
    },
    mounted () {
        this.$http.get(this.url).then(data => {
            this.prepareData(data);
        })
    }
}

