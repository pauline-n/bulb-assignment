new vue ({
        el : '#app',

        data() {
            return{
                signal:false,
                
            }
        },

        methods: {
            toggle : function(){
                this.signal=!this.signal;
            }
        },
    });