
new Vue({
    el: '#app',
    data:{
        dogs:[
            {name: 'Ninja'},
            {name:'Casper'},
            {name: 'Ozzy'}
        ],

        newDog:''
    },

    methods:{
        addDoggo: function(){
            this.dogs.push({name: this.newDog})
            this.newDog = ''
        }
    }
});
