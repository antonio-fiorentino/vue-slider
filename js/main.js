var app = new Vue({
 el: '#contenitore',
 data:{
   imgListIDX: 0,
   imgList: [
     'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
     'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
     'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
     'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
   ]
 },
 methods:{
   prev: function() {
     this.imgListIDX -= 1;

     if (this.imgListIDX=== -1) {
       return this.imgListIDX =3
     }
   },
   next: function() {
     this.imgListIDX += 1;
       if (this.imgListIDX=== 4) {
         return this.imgListIDX =0
       }
   },

  }
});
Vue.config.devtools = true
