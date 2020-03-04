new Vue({
  el :"#app",
  data : {
    ended:false,
    health:100,
    color : 'green-clr'
  },
  methods:{
    punch: function(){
      this.health = this.health - 10 ;
      if(this.health < 40)
        this.color = 'red-clr';
      if(this.health == 0)
        this.ended = true;
    },
    restart:function(){
      this.health = 100;
      this.color = 'green-clr';
      this.ended = false;
    }
  }
})
